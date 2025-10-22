import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Phone, MapPin, Save, Award, Zap } from "lucide-react";
import { toast } from "sonner";

const TechnicianProfile = () => {
  const handleSave = () => {
    toast.success("Perfil actualizado exitosamente");
  };

  const handleUpgradePremium = () => {
    toast.success("Plan Premium activado");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Mi Perfil Profesional</h2>
        <p className="text-muted-foreground">Gestiona tu información y servicios</p>
      </div>

      <Card className="border-primary/50">
        <CardHeader className="bg-gradient-card">
          <div className="flex items-center justify-between">
            <CardTitle>Plan Premium</CardTitle>
            <Badge className="bg-gradient-hero">Activo</Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-muted-foreground mb-4">
            Tu plan Premium te da mayor visibilidad y acceso a estadísticas avanzadas.
          </p>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm">Aparece primero en búsquedas</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm">Estadísticas detalladas</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm">Badge Premium visible</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Información Personal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="" />
              <AvatarFallback className="text-2xl bg-gradient-hero">CR</AvatarFallback>
            </Avatar>
            <Button variant="outline">Cambiar Foto</Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">
                <User className="h-4 w-4 inline mr-2" />
                Nombre Completo
              </Label>
              <Input id="name" defaultValue="Carlos Rodríguez" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">
                <Mail className="h-4 w-4 inline mr-2" />
                Correo Electrónico
              </Label>
              <Input id="email" type="email" defaultValue="carlos@example.com" />
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Información Profesional</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="specialty">Especialidad</Label>
            <Select defaultValue="electricidad">
              <SelectTrigger id="specialty">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electricidad">Electricidad</SelectItem>
                <SelectItem value="plomeria">Plomería</SelectItem>
                <SelectItem value="redes">Redes y Telecomunicaciones</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Años de Experiencia</Label>
            <Input id="experience" defaultValue="8" type="number" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descripción Profesional</Label>
            <Textarea 
              id="description" 
              defaultValue="Técnico especializado en instalaciones eléctricas residenciales y comerciales. Certificado por la SEP con amplia experiencia en sistemas de iluminación y paneles solares."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="certifications">
              <Award className="h-4 w-4 inline mr-2" />
              Certificaciones
            </Label>
            <Input id="certifications" defaultValue="Certificación SEP, Instalador Solar Certificado" />
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
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center p-4 border border-border rounded-lg">
              <p className="text-3xl font-bold text-primary">342</p>
              <p className="text-sm text-muted-foreground">Servicios Completados</p>
            </div>
            <div className="text-center p-4 border border-border rounded-lg">
              <p className="text-3xl font-bold text-primary">4.8</p>
              <p className="text-sm text-muted-foreground">Calificación</p>
            </div>
            <div className="text-center p-4 border border-border rounded-lg">
              <p className="text-3xl font-bold text-primary">127</p>
              <p className="text-sm text-muted-foreground">Reseñas</p>
            </div>
            <div className="text-center p-4 border border-border rounded-lg">
              <p className="text-3xl font-bold text-primary">$85,400</p>
              <p className="text-sm text-muted-foreground">Ingresos Totales</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechnicianProfile;
