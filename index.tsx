import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectItem } from "@/components/ui/select";

const topics = ["Health", "Tech", "Motivation", "News", "Entertainment"];

export default function Home() {
  const [topic, setTopic] = useState("Health");
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState(false);

  const generateArticle = async () => {
    setLoading(true);
    try {
      const demoArticle = `
**${topic} Article**

English: This is a sample article on ${topic}.

Hindi: यह ${topic} पर एक डेमो लेख है।`;
      setArticle(demoArticle);
    } catch (err) {
      setArticle("Error generating article.");
    }
    setLoading(false);
  };

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Daily Article Generator</h1>
      <Select onValueChange={setTopic} value={topic}>
        {topics.map((t) => (
          <SelectItem key={t} value={t}>{t}</SelectItem>
        ))}
      </Select>
      <Button onClick={generateArticle} disabled={loading} className="my-4">
        {loading ? "Generating..." : "Generate Article"}
      </Button>
      <Card>
        <CardContent className="whitespace-pre-wrap p-4">
          {article || "Click 'Generate Article' to see result."}
        </CardContent>
      </Card>
    </main>
  );
}