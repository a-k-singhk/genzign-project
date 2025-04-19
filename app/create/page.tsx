"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sparkles,
  Shirt,
  RefreshCw,
  Download,
  ShoppingCart,
} from "lucide-react";

export default function CreatePage() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDesign, setGeneratedDesign] = useState<string | null>(null);
  const [shirtColor, setShirtColor] = useState("white");
  const [shirtType, setShirtType] = useState("tshirt");

  const handleGenerate = () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    // Simulate AI generation
    setTimeout(() => {
      setGeneratedDesign("/Cyberpunkcity.jpg?height=600&width=400");
      setIsGenerating(false);
    }, 2000);
  };

  const shirtColors = [
    { name: "White", value: "white" },
    { name: "Black", value: "black" },
    { name: "Navy", value: "navy" },
    { name: "Gray", value: "gray" },
    { name: "Red", value: "red" },
  ];

  const shirtTypes = [
    { name: "T-Shirt", value: "tshirt" },
    { name: "Hoodie", value: "hoodie" },
    { name: "Polo", value: "polo" },
    { name: "Tank Top", value: "tanktop" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 py-10">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">
              Create Your Design
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Describe your idea and our AI will bring it to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Design Input Section */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-2">
                        Describe Your Design
                      </h3>
                      <Textarea
                        placeholder="E.g., A cosmic galaxy with planets and stars, vibrant colors, abstract style..."
                        className="min-h-[120px] resize-none"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                      />
                    </div>

                    <Button
                      onClick={handleGenerate}
                      disabled={!prompt.trim() || isGenerating}
                      className="w-full bg-brown-dark hover:bg-brown-darker text-white"
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Generate Design
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">
                    Customize Your Shirt
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Shirt Type
                      </label>
                      <Select value={shirtType} onValueChange={setShirtType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select shirt type" />
                        </SelectTrigger>
                        <SelectContent>
                          {shirtTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Shirt Color
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {shirtColors.map((color) => (
                          <button
                            key={color.value}
                            onClick={() => setShirtColor(color.value)}
                            className={`w-8 h-8 rounded-full border ${
                              shirtColor === color.value
                                ? "ring-2 ring-brown-dark ring-offset-2"
                                : ""
                            }`}
                            style={{ backgroundColor: color.value }}
                            title={color.name}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Design Size
                      </label>
                      <div className="flex items-center">
                        <input
                          type="range"
                          min="50"
                          max="100"
                          defaultValue="75"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Preview Section */}
            <div>
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-medium mb-4">Preview</h3>

                  <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                    {generatedDesign ? (
                      <div className="relative">
                        <img
                          src={`/Cyberpunkcity.jpg?height=600&width=400&text=${shirtType}+${shirtColor}`}
                          alt="Shirt template"
                          className="w-full max-h-[500px] object-contain"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img
                            src={generatedDesign || "/placeholder.svg"}
                            alt="Generated design"
                            className="w-3/4 h-3/4 object-contain"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="text-center p-8">
                        <Shirt className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">
                          Your design will appear here after generation
                        </p>
                      </div>
                    )}
                  </div>

                  {generatedDesign && (
                    <div className="mt-6 space-y-4">
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          className="flex-1 border-brown-light text-brown-dark hover:bg-brown-light/10"
                        >
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Regenerate
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 border-brown-light text-brown-dark hover:bg-brown-light/10"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Save Design
                        </Button>
                      </div>

                      <Tabs defaultValue="buy">
                        <TabsList className="w-full">
                          <TabsTrigger value="buy" className="flex-1">
                            Buy Now
                          </TabsTrigger>
                          <TabsTrigger value="tokens" className="flex-1">
                            Use Tokens
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent value="buy" className="mt-4">
                          <div className="space-y-4">
                            <div className="flex justify-between">
                              <span>Price:</span>
                              <span className="font-semibold">$29.99</span>
                            </div>
                            <Button className="w-full bg-brown-darker hover:bg-brown-dark/90 text-white">
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              Add to Cart
                            </Button>
                          </div>
                        </TabsContent>
                        <TabsContent value="tokens" className="mt-4">
                          <div className="space-y-4">
                            <div className="flex justify-between">
                              <span>Required Tokens:</span>
                              <span className="font-semibold">15 tokens</span>
                            </div>
                            <div className="flex justify-between text-sm text-muted-foreground">
                              <span>Your Balance:</span>
                              <span>10 tokens</span>
                            </div>
                            <Button
                              className="w-full bg-brown-darker hover:bg-brown-dark/90 text-white"
                              disabled
                            >
                              Redeem with Tokens
                            </Button>
                            <p className="text-xs text-center text-muted-foreground">
                              Need more tokens? Create and share designs to earn
                              tokens!
                            </p>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
