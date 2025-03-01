import React from "react";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { zsurik } from "utils/const";

function Zsurik() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-center mb-12">Zsűrik</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {zsurik.map((zsuri, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-gray-900 border border-gray-700 shadow-lg overflow-hidden w-[420px]">
              <CardHeader className="p-0 items-center justify-center">
                <Image
                  src={zsuri.image}
                  alt={zsuri.name}
                  className="w-full h-64 object-cover"
                />
              </CardHeader>
              <CardBody className="p-6">
                <h2 className="text-white text-2xl font-semibold">
                  {zsuri.name}
                </h2>
                <p className="text-gray-400 text-sm mb-4">{zsuri.title}</p>
                <p className="text-gray-300">{zsuri.description}</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Zsurik;
