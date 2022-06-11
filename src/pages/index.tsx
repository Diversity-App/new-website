import React from 'react';
import { Container, Divider, Title } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomePageHero from '../components/HomePageHero';
import MemberCarousel from '../components/MembersCarousel';
import MailchimpSubscribeForm from '../components/MailchimpSubscribe';

export function HomePage() {
  const { t } = useTranslation(['common']);
  return (
    <div>
      <Container>
        <HomePageHero />
        <Title order={3} mb="xl">
          {t('aboutus')}
        </Title>
        <MemberCarousel />
        <Divider my="xl" variant="dotted" size="sm" />
        <MailchimpSubscribeForm />
      </Container>
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['index', 'common'])),
      // Will be passed to the page component as props
    },
  };
}

export default HomePage;
