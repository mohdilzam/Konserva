import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { toast } from '../components/ui/use-toast';

interface Animal {
  _id: string;
  name: string;
  scientificName: string;
  status: string;
}

interface Article {
  _id: string;
  title: string;
  category: string;
  createdAt: string;
}

interface Conservation {
  _id: string;
  title: string;
  status: string;
  startDate: string;
}

const AdminDashboard = () => {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [conservations, setConservations] = useState<Conservation[]>([]);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/');
      return;
    }
    fetchData();
  }, [user, navigate]);

  const fetchData = async () => {
    try {
      const [animalsRes, articlesRes, conservationsRes] = await Promise.all([
        fetch('http://localhost:5000/api/animals'),
        fetch('http://localhost:5000/api/articles'),
        fetch('http://localhost:5000/api/conservation')
      ]);

      const [animalsData, articlesData, conservationsData] = await Promise.all([
        animalsRes.json(),
        articlesRes.json(),
        conservationsRes.json()
      ]);

      setAnimals(animalsData);
      setArticles(articlesData);
      setConservations(conservationsData);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch data',
        variant: 'destructive'
      });
    }
  };

  const handleDelete = async (type: string, id: string) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/${type}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Item deleted successfully'
        });
        fetchData();
      } else {
        throw new Error('Failed to delete item');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete item',
        variant: 'destructive'
      });
    }
  };

  const handleEdit = (type: string, id: string) => {
    navigate(`/admin/${type}/edit/${id}`);
  };

  const handleCreate = (type: string) => {
    navigate(`/admin/${type}/create`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <Tabs defaultValue="animals">
        <TabsList className="mb-8">
          <TabsTrigger value="animals">Animals</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="conservation">Conservation</TabsTrigger>
        </TabsList>

        <TabsContent value="animals">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Animals</h2>
              <Button onClick={() => handleCreate('animals')}>Add New Animal</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Scientific Name</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {animals.map((animal) => (
                    <tr key={animal._id}>
                      <td className="border px-4 py-2">{animal.name}</td>
                      <td className="border px-4 py-2">{animal.scientificName}</td>
                      <td className="border px-4 py-2">{animal.status}</td>
                      <td className="border px-4 py-2">
                        <div className="flex gap-2 justify-center">
                          <Button size="sm" onClick={() => handleEdit('animals', animal._id)}>Edit</Button>
                          <Button size="sm" variant="destructive" onClick={() => handleDelete('animals', animal._id)}>Delete</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="articles">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Articles</h2>
              <Button onClick={() => handleCreate('articles')}>Add New Article</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Created At</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((article) => (
                    <tr key={article._id}>
                      <td className="border px-4 py-2">{article.title}</td>
                      <td className="border px-4 py-2">{article.category}</td>
                      <td className="border px-4 py-2">{new Date(article.createdAt).toLocaleDateString()}</td>
                      <td className="border px-4 py-2">
                        <div className="flex gap-2 justify-center">
                          <Button size="sm" onClick={() => handleEdit('articles', article._id)}>Edit</Button>
                          <Button size="sm" variant="destructive" onClick={() => handleDelete('articles', article._id)}>Delete</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="conservation">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Conservation Programs</h2>
              <Button onClick={() => handleCreate('conservation')}>Add New Program</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Start Date</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {conservations.map((program) => (
                    <tr key={program._id}>
                      <td className="border px-4 py-2">{program.title}</td>
                      <td className="border px-4 py-2">{program.status}</td>
                      <td className="border px-4 py-2">{new Date(program.startDate).toLocaleDateString()}</td>
                      <td className="border px-4 py-2">
                        <div className="flex gap-2 justify-center">
                          <Button size="sm" onClick={() => handleEdit('conservation', program._id)}>Edit</Button>
                          <Button size="sm" variant="destructive" onClick={() => handleDelete('conservation', program._id)}>Delete</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard; 