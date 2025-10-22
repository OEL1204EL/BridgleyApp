import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Check, X, FileText, Award } from "lucide-react";
import { toast } from "sonner";

const TechnicianValidation = () => {
  const pending = [
    { 
      id: 1, 
      name: "Roberto García", 
      email: "roberto@example.com", 
      specialty: "Electricidad", 
      experience: "5 años",
      certifications: ["Certificación SEP"],
      documents: ["INE", "Comprobante domicilio", "Certificado técnico"]
    },
    { 
      id: 2, 
      name: "Laura Hernández", 
      email: "laura@example.com", 
      specialty: "Plomería", 
      experience: "7 años",
      certifications: ["Certificación CONAGUA"],
      documents: ["INE", "Comprobante domicilio", "Certificado técnico"]
    }
  ];

  const handleApprove = (id: number, name: string) => {
    toast.success(`Técnico ${name} aprobado exitosamente`);
  };

  const handleReject = (id: number, name: string) => {
    toast.error(`Solicitud de ${name} rechazada`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Validación de Técnicos</h2>
        <p className="text-muted-foreground">Revisa y aprueba solicitudes de técnicos</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pendientes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-yellow-500">{pending.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Aprobados (Mes)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-500">12</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Rechazados (Mes)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-500">3</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Solicitudes Pendientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {pending.map((tech) => (
              <Card key={tech.id} className="border-2">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarFallback className="bg-gradient-hero text-lg">{tech.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold">{tech.name}</h3>
                          <p className="text-sm text-muted-foreground">{tech.email}</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">{tech.specialty}</Badge>
                            <Badge variant="outline">{tech.experience}</Badge>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-yellow-500/20 text-yellow-500">Pendiente</Badge>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <Award className="h-4 w-4 text-primary" />
                          Certificaciones
                        </div>
                        <ul className="space-y-1">
                          {tech.certifications.map((cert, index) => (
                            <li key={index} className="text-sm text-muted-foreground pl-6">
                              • {cert}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <FileText className="h-4 w-4 text-primary" />
                          Documentos
                        </div>
                        <ul className="space-y-1">
                          {tech.documents.map((doc, index) => (
                            <li key={index} className="text-sm text-muted-foreground pl-6">
                              • {doc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button 
                        variant="hero" 
                        className="flex-1"
                        onClick={() => handleApprove(tech.id, tech.name)}
                      >
                        <Check className="h-4 w-4 mr-2" />
                        Aprobar
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Ver Documentos
                      </Button>
                      <Button 
                        variant="destructive" 
                        className="flex-1"
                        onClick={() => handleReject(tech.id, tech.name)}
                      >
                        <X className="h-4 w-4 mr-2" />
                        Rechazar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechnicianValidation;
