import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, MenuItem } from "@mui/material";
import { motion } from "framer-motion";

export default function InnotecSupport() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Innotec Support</h1>
          <nav className="space-x-4">
            <a href="#soporte" className="hover:underline">Soporte</a>
            <a href="#gestion" className="hover:underline">Gestión de Proyectos</a>
            <a href="#manpower" className="hover:underline">Manpower</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-4">
          Soluciones Inteligentes en Tecnología de la Información
        </motion.h2>
        <p className="text-lg mb-6">Lideramos tu transformación digital con soporte, gestión y talento especializado.</p>
        <Button className="bg-white text-blue-800 font-bold px-6 py-2 rounded-xl shadow">Contáctanos</Button>
      </section>

      {/* Services Section */}
      <main className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <Card id="soporte" className="hover:shadow-xl transition duration-300">
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">🛠 Soporte Técnico</h3>
            <p>Mantenimiento, asistencia remota y soporte on-site para garantizar continuidad operativa.</p>
          </CardContent>
        </Card>
        <Card id="gestion" className="hover:shadow-xl transition duration-300">
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">📊 Gestión de Proyectos</h3>
            <p>Planificación, ejecución y control de proyectos tecnológicos bajo metodologías ágiles.</p>
          </CardContent>
        </Card>
        <Card id="manpower" className="hover:shadow-xl transition duration-300">
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">👥 Manpower TI</h3>
            <p>Outsourcing de profesionales IT calificados según las necesidades de tu empresa.</p>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center p-6 mt-12">
        <p>© 2025 Innotec Support. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
