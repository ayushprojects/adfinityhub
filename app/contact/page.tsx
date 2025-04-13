"use client";

import type React from "react";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import AnimatedText from "@/components/animated-text";

export default function ContactPage() {
  const [formStep, setFormStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    service: "",
    message: "",
    priority: "medium",
    howDidYouHear: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, priority: value }));
  };

  // Update the handleSubmit function to match your Google Sheet column names exactly
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get the form data directly from the formData state object
    // instead of trying to extract it from the form element
    const formDataForSheet = {
      Timestamp: new Date().toISOString(),
      Name: formData.name,
      Email: formData.email,
      Phone: formData.phone || "Not provided",
      Company: formData.company || "Not provided",
      service: formData.service,
      budget: formData.budget || "Not provided",
      priority: formData.priority,
      "How Did You Hear": formData.howDidYouHear || "Not provided",
      Message: formData.message,
    };

    console.log("Sending data to SheetDB:", formDataForSheet);

    // Send data to SheetDB API
    fetch("https://sheetdb.io/api/v1/a7mt1oabosxvz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: formDataForSheet }),
    })
      .then((response) => {
        console.log("SheetDB response status:", response.status);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("SheetDB success response:", data);
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Scroll to top of form to show success message
        if (formRef.current) {
          formRef.current.scrollIntoView({ behavior: "smooth" });
        }

        // Reset form data
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          budget: "",
          service: "",
          message: "",
          priority: "medium",
          howDidYouHear: "",
        });
      })
      .catch((error) => {
        console.error("SheetDB error:", error);
        setIsSubmitting(false);
        alert(
          "There was an error submitting your form. Please try again or contact support."
        );
      });
  };

  const nextStep = () => {
    setFormStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setFormStep((prev) => prev - 1);
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };

  const stepsBackground = [
    "from-purple-800/20 to-indigo-800/20",
    "from-indigo-800/20 to-blue-900/20",
    "from-blue-900/20 to-purple-800/20",
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
            Let's Connect
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Get in Touch With{" "}
            <AnimatedText
              text={[
                "Our Team",
                "Our Experts",
                "AdfinityHub",
                "Marketing Pros",
              ]}
              className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent"
            />
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Have questions or ready to start your next project? Reach out to our
            team and let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 space-y-6">
            <Card className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border-purple-900/50 overflow-hidden">
              <CardContent className="p-6">
                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}>
                  <div className="mr-4 mt-1 bg-purple-500/20 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <motion.p
                      className="text-gray-400 hover:text-purple-300 transition-colors"
                      whileHover={{ scale: 1.01 }}>
                      <a href="mailto:info@adfinityhub.com">
                        info@adfinityhub.com
                      </a>
                    </motion.p>
                    <motion.p
                      className="text-gray-400 hover:text-purple-300 transition-colors"
                      whileHover={{ scale: 1.01 }}>
                      <a href="mailto:support@adfinityhub.com">
                        support@adfinityhub.com
                      </a>
                    </motion.p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border-indigo-900/50 overflow-hidden">
              <CardContent className="p-6">
                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}>
                  <div className="mr-4 mt-1 bg-indigo-500/20 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Phone</h3>
                    <motion.p
                      className="text-gray-400 hover:text-indigo-300 transition-colors"
                      whileHover={{ scale: 1.01 }}>
                      <a href="tel:+91 9399630197">+91 9399630197</a>
                    </motion.p>
                    {/* <motion.p
                      className="text-gray-400 hover:text-indigo-300 transition-colors"
                      whileHover={{ scale: 1.01 }}>
                      <a href="tel:+15559876543">+1 (555) 987-6543</a>
                    </motion.p> */}
                  </div>
                </motion.div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-900/50 overflow-hidden">
              <CardContent className="p-6">
                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}>
                  <div className="mr-4 mt-1 bg-blue-500/20 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Address</h3>
                    <p className="text-gray-400">
                      Bhopal
                      <br />
                      Madhya Pradesh
                      <br />
                      India
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>

            <motion.div
              className="relative overflow-hidden rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 animate-pulse-slow" />
              <div className="relative bg-[#050508]/90 rounded-xl p-6 border border-purple-500/10 backdrop-blur-sm">
                <h3 className="font-medium text-lg mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-purple-300">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-indigo-300">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-blue-300">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Animated Graphic */}
            <motion.div
              className="hidden lg:block h-64 rounded-xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/10 overflow-hidden relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer orbit */}
                <motion.div
                  className="absolute w-48 h-48 rounded-full border border-purple-500/20"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    },
                    scale: {
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                  }}>
                  <motion.div
                    className="absolute -top-2 w-4 h-4 rounded-full bg-purple-500/40"
                    animate={{
                      boxShadow: [
                        "0 0 10px 2px rgba(139, 92, 246, 0.3)",
                        "0 0 20px 4px rgba(139, 92, 246, 0.5)",
                        "0 0 10px 2px rgba(139, 92, 246, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </motion.div>

                {/* Middle orbit */}
                <motion.div
                  className="absolute w-36 h-36 rounded-full border border-indigo-500/20"
                  animate={{
                    rotate: -360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 15,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    },
                    scale: {
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 1,
                    },
                  }}>
                  <motion.div
                    className="absolute -bottom-2 w-4 h-4 rounded-full bg-indigo-500/40"
                    animate={{
                      boxShadow: [
                        "0 0 10px 2px rgba(99, 102, 241, 0.3)",
                        "0 0 20px 4px rgba(99, 102, 241, 0.5)",
                        "0 0 10px 2px rgba(99, 102, 241, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 1,
                    }}
                  />
                </motion.div>

                {/* Inner orbit */}
                <motion.div
                  className="absolute w-24 h-24 rounded-full border border-blue-500/20"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 10,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    },
                    scale: {
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 2,
                    },
                  }}>
                  <motion.div
                    className="absolute -right-2 w-4 h-4 rounded-full bg-blue-500/40"
                    animate={{
                      boxShadow: [
                        "0 0 10px 2px rgba(59, 130, 246, 0.3)",
                        "0 0 20px 4px rgba(59, 130, 246, 0.5)",
                        "0 0 10px 2px rgba(59, 130, 246, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 2,
                    }}
                  />
                </motion.div>

                {/* Center element */}
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/30 via-indigo-500/30 to-blue-500/30 flex items-center justify-center z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 0],
                    background: [
                      "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(99, 102, 241, 0.3) 50%, rgba(59, 130, 246, 0.3) 100%)",
                      "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.3) 50%, rgba(99, 102, 241, 0.3) 100%)",
                      "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(59, 130, 246, 0.3) 50%, rgba(139, 92, 246, 0.3) 100%)",
                      "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(99, 102, 241, 0.3) 50%, rgba(59, 130, 246, 0.3) 100%)",
                    ],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}>
                  <Send className="h-6 w-6 text-white/70" />
                </motion.div>
              </div>

              {/* Floating particles */}
              {typeof window !== "undefined" &&
                [...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-${(i % 3) + 1} h-${
                      (i % 3) + 1
                    } rounded-full ${
                      i % 3 === 0
                        ? "bg-purple-500/30"
                        : i % 3 === 1
                        ? "bg-indigo-500/30"
                        : "bg-blue-500/30"
                    }`}
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x: Math.random() * 300 - 150,
                      y: Math.random() * 300 - 150,
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 5 + Math.random() * 5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                  />
                ))}

              {/* Pulsing background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-indigo-500/5 to-blue-500/5"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  background: [
                    "linear-gradient(to bottom right, rgba(139, 92, 246, 0.05), rgba(99, 102, 241, 0.05), rgba(59, 130, 246, 0.05))",
                    "linear-gradient(to bottom right, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05), rgba(99, 102, 241, 0.05))",
                    "linear-gradient(to bottom right, rgba(99, 102, 241, 0.05), rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))",
                    "linear-gradient(to bottom right, rgba(139, 92, 246, 0.05), rgba(99, 102, 241, 0.05), rgba(59, 130, 246, 0.05))",
                  ],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
            ref={formRef}>
            <Card
              className={`bg-gradient-to-br ${stepsBackground[formStep]} border-purple-900/50 overflow-hidden`}>
              <CardContent className="p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12">
                    <motion.div
                      className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 p-6 rounded-full inline-flex mb-6"
                      animate={{ scale: [0.8, 1.2, 1] }}
                      transition={{ duration: 0.5 }}>
                      <CheckCircle className="h-12 w-12 text-purple-400" />
                    </motion.div>
                    <motion.h3
                      className="text-3xl font-bold mb-2"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.2 }}>
                      Message Sent Successfully!
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 mb-8 text-lg"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.3 }}>
                      Thank you for reaching out. One of our experts will get
                      back to you within 24 hours.
                    </motion.p>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}>
                      <Button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormStep(0);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            company: "",
                            budget: "",
                            service: "",
                            message: "",
                            priority: "medium",
                            howDidYouHear: "",
                          });
                        }}
                        className="bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-900 hover:from-purple-900 hover:via-indigo-900 hover:to-blue-950 text-white">
                        Send Another Message
                      </Button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <div>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                      <p className="text-gray-400">
                        Fill out the form below and we'll get back to you as
                        soon as possible.
                      </p>

                      {/* Progress Steps */}
                      <div className="flex justify-between mt-6 mb-2">
                        {["Your Info", "Project Details", "Message"].map(
                          (step, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center">
                              <motion.div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                                  formStep >= index
                                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                                    : "bg-gray-800 text-gray-400"
                                }`}
                                whileHover={{ scale: 1.05 }}
                                animate={
                                  formStep >= index
                                    ? { scale: [1, 1.1, 1] }
                                    : {}
                                }
                                transition={{ duration: 0.3 }}>
                                {index + 1}
                              </motion.div>
                              <span
                                className={`text-xs mt-1 ${
                                  formStep >= index
                                    ? "text-white"
                                    : "text-gray-500"
                                }`}>
                                {step}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                      <div className="w-full bg-gray-800 h-1 rounded-full mt-2 mb-6">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: `${(formStep + 1) * 33.33}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <AnimatePresence mode="wait">
                        {formStep === 0 && (
                          <motion.div
                            key="step1"
                            variants={formVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label
                                  htmlFor="name"
                                  className="text-sm font-medium">
                                  Full Name{" "}
                                  <span className="text-purple-500">*</span>
                                </Label>
                                <Input
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                  className="bg-[#080810]/70 border-purple-900/50 focus:border-purple-500 transition-all"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label
                                  htmlFor="email"
                                  className="text-sm font-medium">
                                  Email Address{" "}
                                  <span className="text-purple-500">*</span>
                                </Label>
                                <Input
                                  id="email"
                                  name="email"
                                  type="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  className="bg-[#080810]/70 border-purple-900/50 focus:border-purple-500 transition-all"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label
                                  htmlFor="phone"
                                  className="text-sm font-medium">
                                  Phone Number
                                </Label>
                                <Input
                                  id="phone"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  className="bg-[#080810]/70 border-purple-900/50 focus:border-purple-500 transition-all"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label
                                  htmlFor="company"
                                  className="text-sm font-medium">
                                  Company Name
                                </Label>
                                <Input
                                  id="company"
                                  name="company"
                                  value={formData.company}
                                  onChange={handleChange}
                                  className="bg-[#080810]/70 border-purple-900/50 focus:border-purple-500 transition-all"
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label
                                htmlFor="howDidYouHear"
                                className="text-sm font-medium">
                                How did you hear about us?
                              </Label>
                              <Input
                                id="howDidYouHear"
                                name="howDidYouHear"
                                value={formData.howDidYouHear}
                                onChange={handleChange}
                                placeholder="Google, Social Media, Referral, etc."
                                className="bg-[#080810]/70 border-purple-900/50 focus:border-purple-500 transition-all"
                              />
                            </div>

                            <div className="pt-4 flex justify-end">
                              <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}>
                                <Button
                                  type="button"
                                  onClick={nextStep}
                                  className="bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-900 hover:from-purple-900 hover:via-indigo-900 hover:to-blue-950 text-white">
                                  Next Step
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                              </motion.div>
                            </div>
                          </motion.div>
                        )}

                        {formStep === 1 && (
                          <motion.div
                            key="step2"
                            variants={formVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="space-y-6">
                            <div className="space-y-2">
                              <Label
                                htmlFor="service"
                                className="text-sm font-medium">
                                Service You're Interested In{" "}
                                <span className="text-purple-500">*</span>
                              </Label>
                              <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="w-full rounded-md bg-[#080810]/70 border-purple-900/50 text-white p-2 focus:border-purple-500 transition-all">
                                <option value="">Select a service</option>
                                <option value="seo">SEO Optimization</option>
                                <option value="email">Email Marketing</option>
                                <option value="social">
                                  Social Media Marketing
                                </option>
                                <option value="web">Web Development</option>
                                <option value="ecommerce">
                                  E-commerce Solutions
                                </option>
                                <option value="ppc">Pay Per Click</option>
                                <option value="pr">PR Handling</option>
                                <option value="influencer">
                                  Influencer Marketing
                                </option>
                                <option value="ai">AI Solutions</option>
                              </select>
                            </div>

                            <div className="space-y-2">
                              <Label
                                htmlFor="budget"
                                className="text-sm font-medium">
                                Estimated Budget
                              </Label>
                              <select
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="w-full rounded-md bg-[#080810]/70 border-purple-900/50 text-white p-2 focus:border-purple-500 transition-all">
                                <option value="">Select your budget</option>
                                <option value="less-5k">
                                  Less than $5,000
                                </option>
                                <option value="5k-10k">$5,000 - $10,000</option>
                                <option value="10k-25k">
                                  $10,000 - $25,000
                                </option>
                                <option value="25k-50k">
                                  $25,000 - $50,000
                                </option>
                                <option value="more-50k">
                                  More than $50,000
                                </option>
                              </select>
                            </div>

                            <div className="space-y-2">
                              <Label className="text-sm font-medium">
                                Project Priority
                              </Label>
                              <RadioGroup
                                value={formData.priority}
                                onValueChange={handleRadioChange}
                                className="flex space-x-4">
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="low"
                                    id="low"
                                    className="text-purple-500"
                                  />
                                  <Label
                                    htmlFor="low"
                                    className="text-gray-300">
                                    Low
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="medium"
                                    id="medium"
                                    className="text-indigo-500"
                                  />
                                  <Label
                                    htmlFor="medium"
                                    className="text-gray-300">
                                    Medium
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="high"
                                    id="high"
                                    className="text-blue-500"
                                  />
                                  <Label
                                    htmlFor="high"
                                    className="text-gray-300">
                                    High
                                  </Label>
                                </div>
                              </RadioGroup>
                            </div>
                            <div className="pt-4 flex justify-between">
                              <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}>
                                <Button
                                  type="button"
                                  onClick={prevStep}
                                  variant="outline"
                                  className="border-purple-700 text-white hover:bg-gradient-to-r hover:from-purple-900/20 hover:via-indigo-900/20 hover:to-blue-900/20">
                                  Previous Step
                                </Button>
                              </motion.div>
                              <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}>
                                <Button
                                  type="button"
                                  onClick={nextStep}
                                  className="bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-900 hover:from-purple-900 hover:via-indigo-900 hover:to-blue-950 text-white">
                                  Next Step
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                              </motion.div>
                            </div>
                          </motion.div>
                        )}

                        {formStep === 2 && (
                          <motion.div
                            key="step3"
                            variants={formVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="space-y-6">
                            <div className="space-y-2">
                              <Label
                                htmlFor="message"
                                className="text-sm font-medium">
                                Your Message{" "}
                                <span className="text-purple-500">*</span>
                              </Label>
                              <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={8}
                                className="bg-[#080810]/70 border-purple-900/50 focus:border-purple-500 transition-all resize-none"
                                placeholder="Tell us about your project, goals, and timeline..."
                              />
                            </div>

                            <div className="pt-4 flex justify-between">
                              <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}>
                                <Button
                                  type="button"
                                  onClick={prevStep}
                                  variant="outline"
                                  className="border-purple-700 text-white hover:bg-gradient-to-r hover:from-purple-900/20 hover:via-indigo-900/20 hover:to-blue-900/20">
                                  Previous Step
                                </Button>
                              </motion.div>
                              <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}>
                                <Button
                                  type="submit"
                                  disabled={isSubmitting}
                                  className="bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-900 hover:from-purple-900 hover:via-indigo-900 hover:to-blue-950 text-white">
                                  {isSubmitting ? (
                                    <>
                                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                      Sending...
                                    </>
                                  ) : (
                                    <>
                                      Send Message
                                      <Send className="ml-2 h-4 w-4" />
                                    </>
                                  )}
                                </Button>
                              </motion.div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16">
          <div className="bg-gradient-to-br from-purple-900/30 via-indigo-900/30 to-blue-900/30 border border-purple-900/30 rounded-xl overflow-hidden h-[400px] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-center p-8 bg-[#080810]/95 rounded-xl max-w-md backdrop-blur-sm border border-purple-500/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Visit Our Office
                </h3>
                <p className="text-gray-300 mb-4">
                  We&#39;re located in the heart of Tech City. Come say hello!
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
