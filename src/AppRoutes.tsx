import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage.tsx";
import ApplicationPage from "./pages/ApplicationPage.tsx";
import ClientsPage from "./pages/ClientsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";
import SurfaceFinishesPage from "./pages/SurfaceFinishesPage.tsx";
import CareerPage from "./pages/CareerPage.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import ProductDetailPage from "./pages/ProductDetailPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import BlogPostDetailPage from "./pages/BlogPostDetailPage.tsx";
import CataloguePage from "./pages/CataloguePage.tsx";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/products/category/:categoryId" element={<ProductsPage />} />
    <Route path="/clients" element={<ClientsPage />} />
    <Route path="/application" element={<ApplicationPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/finishes" element={<SurfaceFinishesPage />} />
    <Route path="/career" element={<CareerPage />} />
    <Route path="/gallery" element={<GalleryPage />} />
    <Route path="/products/:productId" element={<ProductDetailPage />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/blog/:blogId" element={<BlogPostDetailPage />} />
    <Route path="/catalogue" element={<CataloguePage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
