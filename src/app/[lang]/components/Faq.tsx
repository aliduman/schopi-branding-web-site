"use client";
import React from "react";
import Container from "../components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-schopiColor-primary`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
    /*Schopi alışveriş listesi ürünü ile ilgili soru cevap verisi oluştur.*/
    {
    question: "Schopi nedir?",
    answer: "Schopi, ürünlerinizi çevrimiçi olarak satmanıza yardımcı olacak modern bir e-ticaret şablonudur. Tamamen duyarlı ve güzel bir tasarıma sahip olan bu tema, çarpıcı bir çevrimiçi mağaza oluşturman ıza yardımcı olacaktır.",
    },
    {
    question: "Schopi'yi nasıl satın alabilirim?",
    answer: "Schopi'yi satın almak için, web sitesindeki 'Satın Al' düğmesine tıklayın ve ardından ödemeyi yapın. Ödeme işleminden sonra, satın alma işleminizi doğrulayan bir e-posta alacaksınız ve ardından indirme bağlantısına yönlendirileceksiniz.",
    },
    {
    question: "Schopi'nin fiyatı nedir?",
    answer: "Schopi'nin fiyatı 29 $ 'dır. Bu fiyat, ücretsiz güncellemeler ve 6 ay boyunca ücretsiz teknik destek içerir.",
    },
    {
    question: "Schopi'nin kurulumu zor mu?",
    answer: "Hayır, Schopi'nin kurulumu oldukça kolaydır. Talimatları takip ederek, Schopi'yi kısa sürede kurabilir ve çalıştırabilirsiniz.",
    },
    {
    question: "Schopi'nin desteklenen ödeme yöntemleri nelerdir?",
    answer: "Schopi, PayPal, Visa, MasterCard, American Express ve Discover gibi popüler ödeme yöntemlerini destekler.",
    },
    {
    question: "Schopi'nin iade politikası nedir?",
    answer: "Eğer üründen memnun kalmazsanız, 90 gün içinde bize e-posta gönderin ve size tamamen geri ödeme yapacağız, soru sormadan.",
    },
    {
    question: "Schopi'nin teknik destek sunuyor musunuz?",
    answer: "Evet, Schopi'nin teknik destek planlarını satın alarak 6 ay boyunca destek alabilirsiniz.",
    },
    {
    question: "Schopi'nin özelleştirme seçenekleri nelerdir?",
    answer: "Schopi, özelleştirme seçenekleri sunar ve renk, yazı tipi ve düzen gibi birçok özelliği özelleştirebilirsiniz.",
    },
    {
    question: "Schopi'nin güncellemeleri ücretsiz mi?",
    answer: "Evet, Schopi'nin güncellemeleri ücretsizdir ve yeni güncellemeler yayınlandığında otomatik olarak bilgilendirilirsiniz.",
    },
    {
    question: "Schopi'nin lisansı ne kadar süreyle geçerlidir?",
    answer: "Schopi'nin lisansı ömür boyu geçerlidir ve sınırsız web sitesinde kullanabilirsiniz.",
    }
];
