import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";

interface ChatProps {
  userType: "client" | "technician";
}

const Chat = ({ userType }: ChatProps) => {
  const [message, setMessage] = useState("");
  
  const conversations = userType === "client" ? [
    { id: 1, name: "Ana Martínez", lastMessage: "Estaré allí a las 10 AM", time: "Hace 5 min", unread: 2 },
    { id: 2, name: "José Hernández", lastMessage: "Perfecto, gracias", time: "Hace 1 hora", unread: 0 }
  ] : [
    { id: 1, name: "Juan Pérez", lastMessage: "¿Cuándo puedes venir?", time: "Hace 10 min", unread: 1 },
    { id: 2, name: "María López", lastMessage: "Muchas gracias", time: "Hace 2 horas", unread: 0 }
  ];

  const messages = [
    { id: 1, sender: "other", text: "Hola, ¿cuándo puede realizar el servicio?", time: "10:30 AM" },
    { id: 2, sender: "me", text: "Puedo ir mañana a las 10 AM", time: "10:32 AM" },
    { id: 3, sender: "other", text: "Perfecto, ahí nos vemos", time: "10:35 AM" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Mensajes</h2>
        <p className="text-muted-foreground">Comunícate con {userType === "client" ? "tus técnicos" : "tus clientes"}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Conversaciones</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[500px]">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className="p-4 border-b border-border hover:bg-secondary/50 cursor-pointer transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-hero">{conv.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold truncate">{conv.name}</p>
                        {conv.unread > 0 && (
                          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                      <p className="text-xs text-muted-foreground">{conv.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-gradient-hero">AM</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Ana Martínez</CardTitle>
                <p className="text-sm text-muted-foreground">En línea</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        msg.sender === "me"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className="text-xs mt-1 opacity-70">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="flex gap-2">
              <Input
                placeholder="Escribe un mensaje..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    setMessage("");
                  }
                }}
              />
              <Button variant="hero">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chat;
