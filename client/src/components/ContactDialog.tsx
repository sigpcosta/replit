import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  const { t } = useLanguage();

  const sendContactMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; phone: string; message: string }) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to send message");
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t.contactDialog.success,
        description: t.contactDialog.successMessage,
      });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      onOpenChange(false);
    },
    onError: () => {
      toast({
        title: t.contactDialog.error,
        description: t.contactDialog.errorMessage,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendContactMutation.mutate({ name, email, phone, message });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading">{t.contactDialog.title}</DialogTitle>
          <DialogDescription>
            {t.contactDialog.description}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="contact-name">{t.contactDialog.name} *</Label>
            <Input
              id="contact-name"
              data-testid="input-contact-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder={t.contactDialog.namePlaceholder}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-email">{t.contactDialog.email} *</Label>
            <Input
              id="contact-email"
              data-testid="input-contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={t.contactDialog.emailPlaceholder}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-phone">{t.contactDialog.phone}</Label>
            <Input
              id="contact-phone"
              data-testid="input-contact-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t.contactDialog.phonePlaceholder}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-message">{t.contactDialog.message} *</Label>
            <Textarea
              id="contact-message"
              data-testid="input-contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder={t.contactDialog.messagePlaceholder}
              rows={4}
            />
          </div>

          <div className="space-y-4 pt-2">
            <Button
              type="submit"
              className="w-full"
              disabled={sendContactMutation.isPending}
              data-testid="button-contact-submit"
            >
              {sendContactMutation.isPending ? t.contactDialog.sending : t.contactDialog.submit}
            </Button>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@azores4fun.com" className="hover:text-foreground transition-colors">
                  info@azores4fun.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+351934993770" className="hover:text-foreground transition-colors">
                  +351 934 993 770
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Horta, Faial, Açores</span>
              </div>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
