import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Lock, LogOut, Plus, Pencil, Trash2, MessageSquare, FileText, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import type { Faq, BlogPost } from "@shared/schema";

const SERVICES = [
  { value: "paintball", label: "Paintball" },
  { value: "lasertag", label: "LaserTag" },
  { value: "kayak", label: "Caiaque & SUP" },
  { value: "tours", label: "Tours" },
  { value: "accommodation", label: "Alojamento" },
  { value: "tattoo", label: "Tatuagens" },
  { value: "events", label: "Eventos" },
  { value: "transfers", label: "Transfers" },
  { value: "realestate", label: "Imobiliária" },
  { value: "shop", label: "Loja" },
  { value: "general", label: "Geral" },
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const savedToken = localStorage.getItem("adminToken");
    if (savedToken) {
      fetch("/api/admin/verify", {
        headers: { Authorization: `Bearer ${savedToken}` }
      }).then(res => {
        if (res.ok) {
          setToken(savedToken);
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("adminToken");
        }
      }).catch(() => {
        localStorage.removeItem("adminToken");
      });
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();
      if (data.success) {
        setToken(data.token);
        localStorage.setItem("adminToken", data.token);
        setIsAuthenticated(true);
        toast({ title: "Login efetuado com sucesso" });
      } else {
        toast({ title: "Password incorreta", variant: "destructive" });
      }
    } catch {
      toast({ title: "Erro ao fazer login", variant: "destructive" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setToken("");
    setIsAuthenticated(false);
    toast({ title: "Sessão terminada" });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Lock className="w-12 h-12 mx-auto text-primary mb-4" />
            <CardTitle>Painel de Administração</CardTitle>
            <p className="text-muted-foreground text-sm">Azores4Fun</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                placeholder="Digite a password de administrador"
                data-testid="input-admin-password"
              />
            </div>
            <Button onClick={handleLogin} className="w-full" data-testid="button-admin-login">
              Entrar
            </Button>
            <Link href="/">
              <Button variant="ghost" className="w-full" data-testid="button-back-home">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao site
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" data-testid="button-back-site">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao site
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Painel de Administração</h1>
          </div>
          <Button variant="outline" onClick={handleLogout} data-testid="button-logout">
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="faqs" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="faqs" className="flex items-center gap-2" data-testid="tab-faqs">
              <MessageSquare className="w-4 h-4" />
              FAQs
            </TabsTrigger>
            <TabsTrigger value="blog" className="flex items-center gap-2" data-testid="tab-blog">
              <FileText className="w-4 h-4" />
              Blog
            </TabsTrigger>
          </TabsList>

          <TabsContent value="faqs" className="mt-6">
            <FaqsManager token={token} />
          </TabsContent>

          <TabsContent value="blog" className="mt-6">
            <BlogManager token={token} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function FaqsManager({ token }: { token: string }) {
  const { toast } = useToast();
  const [editingFaq, setEditingFaq] = useState<Faq | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filterService, setFilterService] = useState<string>("all");
  const [formData, setFormData] = useState({
    service: "general",
    questionPt: "",
    questionEn: "",
    answerPt: "",
    answerEn: "",
    keywords: "",
    isActive: "true",
  });

  const { data: faqs = [], isLoading } = useQuery<Faq[]>({
    queryKey: ["/api/faqs"],
  });

  const filteredFaqs = filterService === "all" 
    ? faqs 
    : faqs.filter(faq => faq.service === filterService);

  const createMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await fetch("/api/admin/faqs", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erro ao criar FAQ");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/faqs"] });
      toast({ title: "FAQ criada com sucesso" });
      resetForm();
    },
    onError: () => {
      toast({ title: "Erro ao criar FAQ", variant: "destructive" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: typeof formData }) => {
      const res = await fetch(`/api/admin/faqs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erro ao atualizar FAQ");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/faqs"] });
      toast({ title: "FAQ atualizada com sucesso" });
      resetForm();
    },
    onError: () => {
      toast({ title: "Erro ao atualizar FAQ", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/admin/faqs/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Erro ao eliminar FAQ");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/faqs"] });
      toast({ title: "FAQ eliminada com sucesso" });
    },
    onError: () => {
      toast({ title: "Erro ao eliminar FAQ", variant: "destructive" });
    },
  });

  const resetForm = () => {
    setFormData({
      service: "general",
      questionPt: "",
      questionEn: "",
      answerPt: "",
      answerEn: "",
      keywords: "",
      isActive: "true",
    });
    setEditingFaq(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (faq: Faq) => {
    setEditingFaq(faq);
    setFormData({
      service: faq.service,
      questionPt: faq.questionPt,
      questionEn: faq.questionEn,
      answerPt: faq.answerPt,
      answerEn: faq.answerEn,
      keywords: faq.keywords || "",
      isActive: faq.isActive || "true",
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = () => {
    if (editingFaq) {
      updateMutation.mutate({ id: editingFaq.id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  if (isLoading) {
    return <div className="text-center py-8">A carregar FAQs...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-4 flex-wrap">
          <h2 className="text-2xl font-bold">FAQs ({filteredFaqs.length}/{faqs.length})</h2>
          <Select value={filterService} onValueChange={setFilterService}>
            <SelectTrigger className="w-[180px]" data-testid="select-filter-service">
              <SelectValue placeholder="Filtrar por serviço" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os serviços</SelectItem>
              {SERVICES.map((s) => (
                <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => resetForm()} data-testid="button-add-faq">
              <Plus className="w-4 h-4 mr-2" />
              Nova FAQ
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingFaq ? "Editar FAQ" : "Nova FAQ"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Serviço</Label>
                  <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
                    <SelectTrigger data-testid="select-service">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((s) => (
                        <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 flex items-center gap-2">
                  <Label>Ativa</Label>
                  <Switch
                    checked={formData.isActive === "true"}
                    onCheckedChange={(v) => setFormData({ ...formData, isActive: v ? "true" : "false" })}
                    data-testid="switch-active"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Pergunta (PT)</Label>
                <Input
                  value={formData.questionPt}
                  onChange={(e) => setFormData({ ...formData, questionPt: e.target.value })}
                  placeholder="Pergunta em português"
                  data-testid="input-question-pt"
                />
              </div>
              <div className="space-y-2">
                <Label>Pergunta (EN)</Label>
                <Input
                  value={formData.questionEn}
                  onChange={(e) => setFormData({ ...formData, questionEn: e.target.value })}
                  placeholder="Question in English"
                  data-testid="input-question-en"
                />
              </div>
              <div className="space-y-2">
                <Label>Resposta (PT)</Label>
                <Textarea
                  value={formData.answerPt}
                  onChange={(e) => setFormData({ ...formData, answerPt: e.target.value })}
                  placeholder="Resposta em português"
                  rows={3}
                  data-testid="input-answer-pt"
                />
              </div>
              <div className="space-y-2">
                <Label>Resposta (EN)</Label>
                <Textarea
                  value={formData.answerEn}
                  onChange={(e) => setFormData({ ...formData, answerEn: e.target.value })}
                  placeholder="Answer in English"
                  rows={3}
                  data-testid="input-answer-en"
                />
              </div>
              <div className="space-y-2">
                <Label>Palavras-chave (separadas por vírgula)</Label>
                <Input
                  value={formData.keywords}
                  onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                  placeholder="paintball, preço, reservar"
                  data-testid="input-keywords"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={resetForm} data-testid="button-cancel">
                  Cancelar
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={createMutation.isPending || updateMutation.isPending}
                  data-testid="button-save-faq"
                >
                  {editingFaq ? "Guardar" : "Criar"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {filteredFaqs.map((faq) => (
          <Card key={faq.id} className="hover-elevate" data-testid={`card-faq-${faq.id}`}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {SERVICES.find((s) => s.value === faq.service)?.label || faq.service}
                    </span>
                    {faq.isActive === "false" && (
                      <span className="text-xs bg-destructive/10 text-destructive px-2 py-1 rounded">Inativa</span>
                    )}
                  </div>
                  <p className="font-medium text-sm mb-1">{faq.questionPt}</p>
                  <p className="text-xs text-muted-foreground">{faq.answerPt.substring(0, 100)}...</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(faq)} data-testid={`button-edit-faq-${faq.id}`}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteMutation.mutate(faq.id)}
                    disabled={deleteMutation.isPending}
                    data-testid={`button-delete-faq-${faq.id}`}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function BlogManager({ token }: { token: string }) {
  const { toast } = useToast();
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    slug: "",
    titlePt: "",
    titleEn: "",
    excerptPt: "",
    excerptEn: "",
    contentPt: "",
    contentEn: "",
    featuredImage: "",
    category: "",
  });

  const { data: posts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  const createMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await fetch("/api/admin/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erro ao criar artigo");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      toast({ title: "Artigo criado com sucesso" });
      resetForm();
    },
    onError: () => {
      toast({ title: "Erro ao criar artigo", variant: "destructive" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: typeof formData }) => {
      const res = await fetch(`/api/admin/blog/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erro ao atualizar artigo");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      toast({ title: "Artigo atualizado com sucesso" });
      resetForm();
    },
    onError: () => {
      toast({ title: "Erro ao atualizar artigo", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/admin/blog/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Erro ao eliminar artigo");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      toast({ title: "Artigo eliminado com sucesso" });
    },
    onError: () => {
      toast({ title: "Erro ao eliminar artigo", variant: "destructive" });
    },
  });

  const resetForm = () => {
    setFormData({
      slug: "",
      titlePt: "",
      titleEn: "",
      excerptPt: "",
      excerptEn: "",
      contentPt: "",
      contentEn: "",
      featuredImage: "",
      category: "",
    });
    setEditingPost(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      slug: post.slug,
      titlePt: post.titlePt,
      titleEn: post.titleEn,
      excerptPt: post.excerptPt,
      excerptEn: post.excerptEn,
      contentPt: post.contentPt,
      contentEn: post.contentEn,
      featuredImage: post.featuredImage || "",
      category: post.category || "",
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = () => {
    if (editingPost) {
      updateMutation.mutate({ id: editingPost.id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  if (isLoading) {
    return <div className="text-center py-8">A carregar artigos...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h2 className="text-2xl font-bold">Artigos do Blog ({posts.length})</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => resetForm()} data-testid="button-add-post">
              <Plus className="w-4 h-4 mr-2" />
              Novo Artigo
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingPost ? "Editar Artigo" : "Novo Artigo"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Slug (URL)</Label>
                  <Input
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="meu-artigo"
                    data-testid="input-slug"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Categoria</Label>
                  <Input
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="turismo"
                    data-testid="input-category"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>URL da Imagem</Label>
                <Input
                  value={formData.featuredImage}
                  onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
                  placeholder="https://..."
                  data-testid="input-featured-image"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Título (PT)</Label>
                  <Input
                    value={formData.titlePt}
                    onChange={(e) => setFormData({ ...formData, titlePt: e.target.value })}
                    placeholder="Título em português"
                    data-testid="input-title-pt"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Título (EN)</Label>
                  <Input
                    value={formData.titleEn}
                    onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
                    placeholder="Title in English"
                    data-testid="input-title-en"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Excerto (PT)</Label>
                  <Textarea
                    value={formData.excerptPt}
                    onChange={(e) => setFormData({ ...formData, excerptPt: e.target.value })}
                    placeholder="Resumo breve em português"
                    rows={2}
                    data-testid="input-excerpt-pt"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Excerto (EN)</Label>
                  <Textarea
                    value={formData.excerptEn}
                    onChange={(e) => setFormData({ ...formData, excerptEn: e.target.value })}
                    placeholder="Brief summary in English"
                    rows={2}
                    data-testid="input-excerpt-en"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Conteúdo (PT) - Suporta Markdown</Label>
                <Textarea
                  value={formData.contentPt}
                  onChange={(e) => setFormData({ ...formData, contentPt: e.target.value })}
                  placeholder="Conteúdo completo em português..."
                  rows={6}
                  data-testid="input-content-pt"
                />
              </div>
              <div className="space-y-2">
                <Label>Conteúdo (EN) - Suporta Markdown</Label>
                <Textarea
                  value={formData.contentEn}
                  onChange={(e) => setFormData({ ...formData, contentEn: e.target.value })}
                  placeholder="Full content in English..."
                  rows={6}
                  data-testid="input-content-en"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={resetForm} data-testid="button-cancel-post">
                  Cancelar
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={createMutation.isPending || updateMutation.isPending}
                  data-testid="button-save-post"
                >
                  {editingPost ? "Guardar" : "Criar"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="hover-elevate" data-testid={`card-post-${post.id}`}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">/{post.slug}</span>
                  </div>
                  <p className="font-medium text-sm mb-1">{post.titlePt}</p>
                  <p className="text-xs text-muted-foreground">{post.excerptPt.substring(0, 100)}...</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(post)} data-testid={`button-edit-post-${post.id}`}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteMutation.mutate(post.id)}
                    disabled={deleteMutation.isPending}
                    data-testid={`button-delete-post-${post.id}`}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
