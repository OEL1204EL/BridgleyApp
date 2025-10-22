import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import logo from "@/assets/logo.png";
import { toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent, userType: string) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      toast.success("Inicio de sesión exitoso");
      if (userType === "client") navigate("/client/dashboard");
      else if (userType === "technician") navigate("/technician/dashboard");
      else navigate("/admin/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  const handleRegister = async (e: React.FormEvent, userType: string) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      toast.success("Registro exitoso");
      if (userType === "client") navigate("/client/dashboard");
      else navigate("/technician/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src={logo} alt="Bridgely" className="h-24 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-foreground">Bridgely</h1>
          <p className="text-muted-foreground">Connecting Ideas & Futures</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
            <TabsTrigger value="register">Registrarse</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Iniciar Sesión</CardTitle>
                <CardDescription>Ingresa tus credenciales para acceder</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => handleLogin(e, "client")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="userType">Tipo de Usuario</Label>
                    <Select defaultValue="client">
                      <SelectTrigger id="userType">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="client">Cliente</SelectItem>
                        <SelectItem value="technician">Técnico</SelectItem>
                        <SelectItem value="admin">Administrador</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full" variant="hero" disabled={isLoading}>
                    {isLoading ? "Iniciando..." : "Iniciar Sesión"}
                  </Button>
                  <Button type="button" variant="ghost" className="w-full text-sm">
                    ¿Olvidaste tu contraseña?
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Crear Cuenta</CardTitle>
                <CardDescription>Regístrate para comenzar</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => handleRegister(e, "client")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="userType">Tipo de Cuenta</Label>
                    <Select defaultValue="client">
                      <SelectTrigger id="userType">
                        <SelectValue />
                      </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="client">Cliente</SelectItem>
                    <SelectItem value="technician">Técnico</SelectItem>
                    <SelectItem value="admin">Administrador</SelectItem>
                  </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input id="name" type="text" placeholder="Juan Pérez" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" type="tel" placeholder="+52 123 456 7890" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                    <Input id="confirmPassword" type="password" required />
                  </div>
                  <Button type="submit" className="w-full" variant="hero" disabled={isLoading}>
                    {isLoading ? "Registrando..." : "Crear Cuenta"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
