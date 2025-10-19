<template>
  <section
    class="form flex gap-10 rounded-[60px] bg-SectionBG p-6 max-lg:flex-col md:p-10 lg:p-[60px]"
  >
    <div class="relative flex-1 lg:min-w-[400px]">
      <h1 class="mb-6 text-2xl font-medium max-lg:text-center md:mb-10 md:text-3xl lg:text-5xl">
        Don’t hesitate to reach out
      </h1>

      <Form
        @submit="onSubmit"
        v-slot="{ errors }"
        :validation-schema="schema"
        class="relative w-full flex-grow"
      >
        <div class="mb-6 flex w-full flex-col lg:mb-8">
          <label for="FullName">
            {{ locale === 'ar' ? 'الإسم الكامل' : ' Full Name' }}
          </label>
          <Field
            id="FullName"
            name="FullName"
            type="text"
            :placeholder="locale === 'en' ? 'Enter your full name' : 'أدخل اسمك الكامل'"
            class="Field"
            :class="{ 'border-red-500': errors.FullName }"
          />
          <span class="text-sm text-red-500">{{ errors.FullName }}</span>
        </div>

        <div class="mb-6 flex w-full flex-col lg:mb-8">
          <label for="phoneNumber">
            {{ locale === 'ar' ? 'رقم الهاتف' : 'Phone' }}
          </label>
          <Field
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            :placeholder="locale === 'en' ? 'Enter your phone number' : '+966 5X XXX XXXX'"
            class="Field"
            :class="{ 'border-red-500': errors.phoneNumber }"
          />
          <span class="text-sm text-red-500">{{ errors.phoneNumber }}</span>
        </div>

        <div class="mb-6 flex w-full flex-col lg:mb-8">
          <label for="email">
            {{ locale === 'ar' ? 'عنوان البريد الإلكتروني' : 'Email' }}
          </label>
          <Field
            id="email"
            name="email"
            type="email"
            :placeholder="locale === 'en' ? 'Enter your email address' : 'example@company.com'"
            class="Field"
            :class="{ 'border-red-500': errors.email }"
          />
          <span class="text-sm text-red-500">{{ errors.email }}</span>
        </div>

        <div class="flex w-full flex-col">
          <label for="message">
            {{ locale === 'ar' ? 'رسالتك / تفاصيل الحالة' : 'Message' }}
          </label>
          <Field
            id="message"
            name="message"
            as="textarea"
            :placeholder="
              locale === 'en' ? 'Write your message here' : 'اشرح باختصار ما ترغب باستشارته'
            "
            class="focus:ring-primary-main h-32 w-full resize-none rounded-2xl border p-4 text-black focus:outline-none focus:ring-2 md:h-[144px]"
            :class="{ 'border-red-500': errors.message }"
          />
          <span class="text-sm text-red-500">{{ errors.message }}</span>
        </div>

        <h1 class="mt-6 text-xl font-normal lg:mt-8 lg:text-2xl">
          By sending inquiry, you agree to our <nuxt-link to="privacy" class="underline">
            Privacy Policy.</nuxt-link
          >
        </h1>
        <div class="sm:mr-auto sm:w-fit">
          <button
            type="submit"
            :disabled="isLoading"
            class="gradient-buttonTwo mt-4 w-full lg:mt-10"
          >
            Send Message
          </button>
        </div>
      </Form>
    </div>
    <div class="relative flex w-[604px] max-w-[604px] flex-col rounded-[40px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4440.142718409408!2d39.1429966!3d21.562991900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3db53648e937b%3A0x2115491c6c29660c!2sDistretto%20Design!5e1!3m2!1sen!2seg!4v1760879059779!5m2!1sen!2seg"
        style="border: 0"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="h-full w-full rounded-[40px]"
      ></iframe>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
const { locale } = useI18n();

const isLoading = ref(false);
// import { useEmail } from "~/composables/useEmail";
const schema = yup.object({
  FullName: yup
    .string()
    .min(
      2,
      locale.value === 'en'
        ? 'First name must be at least 2 characters'
        : 'يجب أن يكون الاسم الأول على الأقل 2 أحرف'
    )
    .required(locale.value === 'en' ? 'First name is required' : 'الاسم الأول مطلوب'),
  email: yup
    .string()
    .email(locale.value === 'en' ? 'Invalid email' : 'البريد الإلكتروني غير صالح')
    .required(locale.value === 'en' ? 'Email is required' : 'البريد الإلكتروني مطلوب'),

  phoneNumber: yup
    .string()
    .matches(
      /^[0-9]{10,}$/,
      locale.value === 'en'
        ? 'Number must be at least 10 digits'
        : 'يجب أن يكون الرقم على الأقل 10 أرقام'
    )
    .required(locale.value === 'en' ? 'Phone number is required' : 'رقم الهاتف مطلوب'),

  message: yup
    .string()
    .min(
      10,
      locale.value === 'en'
        ? 'Message must be at least 10 characters'
        : 'يجب أن تحتوي الرسالة على 10 أحرف على الأقل'
    )
    .max(
      500,
      locale.value === 'en'
        ? 'Message cannot exceed 500 characters'
        : 'يجب ألا تتجاوز الرسالة 500 حرف'
    )
    .required(locale.value === 'en' ? 'Message is required' : 'الرسالة مطلوبة'),
});
// const { sendEmail } = useEmail();
const onSubmit = async (values: any) => {
  try {
    isLoading.value = true;
    // await sendEmail(values);
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.Field {
  @apply h-[48px] w-full rounded-2xl border border-[#8A8A8A] px-2.5 py-2 text-black focus:bg-white focus:outline-none focus:ring-2 md:px-4 md:py-3;
}

label {
  @apply mb-1 inline-block cursor-pointer text-sm font-normal text-black md:mb-2;
}
</style>
