import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Phone, MapPin, Save } from "lucide-react";
import { toast } from "sonner";

const ClientProfile = () => {
  const handleSave = () => {
    toast.success("Perfil actualizado exitosamente");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Mi Perfil</h2>
        <p className="text-muted-foreground">Gestiona tu información personal</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Información Personal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="" />
              <AvatarFallback className="text-2xl bg-gradient-hero">JP</AvatarFallback>
            </Avatar>
            <Button variant="outline">Cambiar Foto</Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">
                <User className="h-4 w-4 inline mr-2" />
                Nombre Completo
              </Label>
              <Input id="name" defaultValue="Juan Pérez" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">
                <Mail className="h-4 w-4 inline mr-2" />
                Correo Electrónico
              </Label>
              <Input id="email" type="email" defaultValue="juan@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">
                <Phone className="h-4 w-4 inline mr-2" />
                Teléfono
              </Label>
              <Input id="phone" defaultValue="+52 123 456 7890" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">
                <MapPin className="h-4 w-4 inline mr-2" />
                Ubicación
              </Label>
              <Input id="location" defaultValue="Ciudad de México" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Dirección Completa</Label>
            <Textarea id="address" defaultValue="Av. Reforma 123, Col. Centro, Ciudad de México" />
          </div>

          <Button onClick={handleSave} variant="hero" className="w-full md:w-auto">
            <Save className="h-4 w-4 mr-2" />
            Guardar Cambios
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Estadísticas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 border border-border rounded-lg">
              <p className="text-3xl font-bold text-primary">12</p>
              <p className="text-sm text-muted-foreground">Servicios Completados</p>
            </div>
            <div className="text-center p-4 border border-border rounded-lg">
              <p className="text-3xl font-bold text-primary">2</p>
              <p className="text-sm text-muted-foreground">Servicios Activos</p>
            </div>
            <div className="text-center p-4 border border-border rounded-lg">
              <p className="text-3xl font-bold text-primary">$2,450</p>
              <p className="text-sm text-muted-foreground">Total Gastado</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientProfile;
