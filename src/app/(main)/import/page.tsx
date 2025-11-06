import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileUp, Upload } from "lucide-react";

export default function ImportPage() {
  return (
    <div>
      <PageHeader
        title="Import Data"
        description="Bulk import your data from Excel files."
      />
      <Tabs defaultValue="recipes" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="recipes">Recipes</TabsTrigger>
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
        </TabsList>
        <TabsContent value="recipes">
          <ImportTab title="Import Recipes" />
        </TabsContent>
        <TabsContent value="ingredients">
          <ImportTab title="Import Ingredients" />
        </TabsContent>
        <TabsContent value="products">
          <ImportTab title="Import Products" />
        </TabsContent>
        <TabsContent value="sales">
          <ImportTab title="Import Sales" />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ImportTab({ title }: { title: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          Upload an Excel file (.xlsx) to import your data.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-muted-foreground">XLSX, XLS (MAX. 10MB)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
        </div>
        <Button className="w-full">
            <FileUp className="mr-2 h-4 w-4" /> Import File
        </Button>
      </CardContent>
    </Card>
  )
}
