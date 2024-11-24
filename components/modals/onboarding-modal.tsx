"use client";

import { useCallback, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, User, PiggyBank, TrendingUp } from "lucide-react";
import { useUser } from "@stackframe/stack";

export function OnboardingModal() {
  const user = useUser();
  const [isOpen, setIsOpen] = useState<boolean>(
    !user?.clientMetadata?.onboarding,
  );
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = useCallback(() => {
    // Hanya izinkan close modal jika sudah selesai onboarding
    if (user?.clientMetadata?.onboarding) {
      setIsOpen(false);
    }
  }, [user?.clientMetadata?.onboarding]);

  const updateNameUser = async () => {
    try {
      setIsSubmitting(true);
      await user?.update({
        displayName: name,
        clientMetadata: {
          onboarding: true,
        },
      });
      // Hanya tutup modal setelah update berhasil
      setIsOpen(false);
    } catch (error) {
      console.error("Failed to update user:", error);
      // Tambahkan error handling/toast disini
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = async () => {
    if (step === 1) {
      setStep(2);
    } else if (name.trim()) {
      await updateNameUser();
    }
  };

  const stepContent = {
    1: {
      icon: <Rocket className="w-16 h-16 mb-4" />,
      title: "Halo, Sobat Keuangan!",
      description:
        "Selamat datang di Tratur, Finance Personal OS kamu yang baru! Kita bakal jadi partner yang asyik buat ngatur duitmu.",
      content: (
        <>
          <h3 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-200">
            Yuk, Mulai Petualangan!
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Kita udah siapin pengalaman yang seru banget buat kamu. Tinggal satu
            langkah lagi nih, dan kita bisa mulai!
          </p>
          <div className="flex items-center mb-4 text-indigo-600 dark:text-indigo-400">
            <TrendingUp className="w-6 h-6 mr-2" />
            <span>Pantau keuanganmu dengan mudah</span>
          </div>
          <Button
            onClick={handleNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white w-full"
          >
            Gas, Lanjut!
          </Button>
        </>
      ),
    },
    2: {
      icon: <PiggyBank className="w-16 h-16 mb-4" />,
      title: "Siap Jadi Jagoan Keuangan?",
      description:
        "Dengan Tratur, kamu bakal belajar gimana caranya nabung dengan gaya, investasi yang keren, dan ngejar impian finansial kamu!",
      content: (
        <>
          <h3 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-200">
            Siapa nih yang Mau Jago Ngatur Duit?
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Biar lebih akrab, kenalin diri kamu dong! Namamu bakal kita pake
            buat bikin pengalaman yang lebih personal di Tratur.
          </p>
          <div className="space-y-4">
            <div className="relative">
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 bg-white dark:bg-gray-700"
                placeholder="e.g., Baco"
              />
              <User className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Button
              onClick={handleNext}
              disabled={name.trim() === "" || isSubmitting}
              className="bg-indigo-600 hover:bg-indigo-700 text-white w-full"
            >
              {isSubmitting ? "Menyimpan..." : "Oke, Siap Mulai!"}
            </Button>
          </div>
        </>
      ),
    },
  };

  const currentStep = stepContent[step as keyof typeof stepContent];

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 bg-indigo-600 p-6 flex flex-col justify-center items-center text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                {currentStep.icon}
                <h2 className="text-2xl font-bold mb-4">{currentStep.title}</h2>
                <p className="mb-6">{currentStep.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="md:w-1/2 p-6 bg-white dark:bg-gray-800">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col justify-center"
              >
                {currentStep.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
