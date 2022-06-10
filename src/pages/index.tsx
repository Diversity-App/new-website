import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Index.module.css';
import React, { useState } from 'react';
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  useMantineTheme,
} from '@mantine/core';
import { IconCheck, IconEyeglass, IconMail, IconSearch } from '@tabler/icons';
import image from '../assets/hero.svg';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import HomePageHero from '../components/HomePageHero';

export function HomePage() {
  return (
    <div>
      <Container>
        <HomePageHero />
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
