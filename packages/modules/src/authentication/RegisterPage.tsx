import Image from 'next/image';
import Link from 'next/link';
import { Button, InputField, SeoMeta, Typography } from 'ui';
import {
  AuthLayout,
  FacebookIcon,
  GoogleIcon,
  NextPageWithLayout,
} from './AuthLayout';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useTypeSafeTranslation } from 'shared-utils/hooks';

const validationSchema = Yup.object({
  name: Yup.string().required('formik.required'),
  email: Yup.string().email('formik.email.invalid').required('formik.required'),
  password: Yup.string()
    .min(8, 'formik.password.min')
    .max(60, 'formik.password.max')
    .required('formik.required'),
});

interface InitialValuesType {
  name: string;
  email: string;
  password: string;
}

export const RegisterPage: NextPageWithLayout = () => {
  const { t } = useTypeSafeTranslation();
  const handleSubmit = ({ email, password, name }: InitialValuesType) => {
    console.log(name, email, password);
  };

  return (
    <>
      <SeoMeta title="Register - Prutteka" description="" />
      <div className="w-auto">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            height="72"
            width="184"
            className="mx-auto"
            priority
          />
        </Link>

        <Formik
          initialValues={{ email: '', password: '', name: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="flex flex-col gap-4 p-4">
              <InputField
                name="name"
                placeholder={t('register-page.name') || ''}
                type="text"
              />
              <InputField
                name="email"
                placeholder={t('register-page.email') || ''}
                type="email"
              />
              <InputField
                name="password"
                placeholder={t('register-page.password') || ''}
                type="password"
              />

              <Button hasShadow type="submit">
                {t('register-page.create-new-account')}
              </Button>
              <div className="my-3 mx-2 border-b-2 border-gray-200" />
              <Button variant="secondary" as="link" href="/login" type="button">
                {t('register-page.login')}
              </Button>
              <Typography className="text-center">or</Typography>
              <Button
                variant="secondary"
                icon={GoogleIcon}
                className="gap-6"
                type="button"
              >
                {t('register-page.continue-with-google')}
              </Button>
              <Button
                variant="secondary"
                icon={FacebookIcon}
                className="gap-6"
                type="button"
              >
                {t('register-page.continue-with-facebook')}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

RegisterPage.getLayout = AuthLayout;
