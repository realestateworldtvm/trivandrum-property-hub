import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit2, Trash2, Save, X, Home, Building, MapPin } from "lucide-react";

interface Property {
  id: string;
  title: string;
  type: string;
  price: string;
  location: string;
  description: string;
  features: string;
  status: 'available' | 'sold' | 'rented';
  imageUrl?: string;
  createdAt: string;
}

const AdminPanel = () => {
  const { toast } = useToast();
  const [properties, setProperties] = useState<Property[]>([]);
  const [isAddingProperty, setIsAddingProperty] = useState(false);
  const [editingProperty, setEditingProperty] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    price: "",
    location: "",
    description: "",
    features: "",
    status: "available" as Property['status'],
    imageUrl: ""
  });

  // Load properties from localStorage on component mount
  useEffect(() => {
    const savedProperties = localStorage.getItem('realEstateProperties');
    if (savedProperties) {
      setProperties(JSON.parse(savedProperties));
    }
  }, []);

  // Save properties to localStorage whenever properties change
  useEffect(() => {
    localStorage.setItem('realEstateProperties', JSON.stringify(properties));
  }, [properties]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.type || !formData.price || !formData.location) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const newProperty: Property = {
      id: editingProperty || Date.now().toString(),
      ...formData,
      createdAt: editingProperty ? 
        properties.find(p => p.id === editingProperty)?.createdAt || new Date().toISOString() :
        new Date().toISOString()
    };

    if (editingProperty) {
      setProperties(prev => prev.map(p => p.id === editingProperty ? newProperty : p));
      toast({
        title: "Success",
        description: "Property updated successfully!"
      });
    } else {
      setProperties(prev => [newProperty, ...prev]);
      toast({
        title: "Success", 
        description: "Property added successfully!"
      });
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: "",
      type: "",
      price: "",
      location: "",
      description: "",
      features: "",
      status: "available",
      imageUrl: ""
    });
    setIsAddingProperty(false);
    setEditingProperty(null);
  };

  const handleEdit = (property: Property) => {
    setFormData({
      title: property.title,
      type: property.type,
      price: property.price,
      location: property.location,
      description: property.description,
      features: property.features,
      status: property.status,
      imageUrl: property.imageUrl || ""
    });
    setEditingProperty(property.id);
    setIsAddingProperty(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      setProperties(prev => prev.filter(p => p.id !== id));
      toast({
        title: "Success",
        description: "Property deleted successfully!"
      });
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'house':
      case 'villa':
        return <Home className="h-4 w-4" />;
      case 'apartment':
      case 'flat':
        return <Building className="h-4 w-4" />;
      case 'plot':
      case 'land':
        return <MapPin className="h-4 w-4" />;
      default:
        return <Building className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: Property['status']) => {
    switch (status) {
      case 'available':
        return 'bg-kerala-green text-white';
      case 'sold':
        return 'bg-primary text-primary-foreground';
      case 'rented':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
            <p className="text-muted-foreground">Manage your property listings</p>
          </div>
          <Button 
            onClick={() => setIsAddingProperty(true)}
            className="bg-gradient-primary hover:shadow-elegant transition-all"
            disabled={isAddingProperty}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Property
          </Button>
        </div>

        {/* Add/Edit Property Form */}
        {isAddingProperty && (
          <Card className="mb-8 shadow-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {editingProperty ? 'Edit Property' : 'Add New Property'}
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={resetForm}
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Property Title *
                    </label>
                    <Input
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="e.g., Beautiful 3BHK Villa in Trivandrum"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Property Type *
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    >
                      <option value="">Select Type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                      <option value="plot">Plot/Land</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Price *
                    </label>
                    <Input
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="e.g., ₹45,00,000 or ₹15,000/month"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Location *
                    </label>
                    <Input
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g., Pattom, Thiruvananthapuram"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Status
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    >
                      <option value="available">Available</option>
                      <option value="sold">Sold</option>
                      <option value="rented">Rented</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Image URL
                    </label>
                    <Input
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleInputChange}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Description
                  </label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Describe the property..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Features
                  </label>
                  <Textarea
                    name="features"
                    value={formData.features}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="e.g., 3 bedrooms, 2 bathrooms, parking, garden"
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="bg-gradient-primary">
                    <Save className="h-4 w-4 mr-2" />
                    {editingProperty ? 'Update Property' : 'Add Property'}
                  </Button>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Properties List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Property Listings ({properties.length})
          </h2>
          
          {properties.length === 0 ? (
            <Card className="shadow-card border-border">
              <CardContent className="p-12 text-center">
                <Building className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No Properties Added</h3>
                <p className="text-muted-foreground">Add your first property to get started.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-2 gap-6">
              {properties.map((property) => (
                <Card key={property.id} className="shadow-card border-border hover:shadow-hover transition-all">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(property.type)}
                        <h3 className="font-semibold text-card-foreground">{property.title}</h3>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(property)}
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(property.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge className={getStatusColor(property.status)}>
                          {property.status}
                        </Badge>
                        <span className="font-semibold text-primary">{property.price}</span>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{property.location}</span>
                      </div>

                      {property.description && (
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {property.description}
                        </p>
                      )}

                      {property.features && (
                        <p className="text-sm text-muted-foreground">
                          <strong>Features:</strong> {property.features}
                        </p>
                      )}

                      <div className="text-xs text-muted-foreground">
                        Added: {new Date(property.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;