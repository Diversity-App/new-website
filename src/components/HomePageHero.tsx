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
import ContactForm, { ContactUs } from './ContactForm';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export default function HomePageHero(props: any) {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const router = useRouter();
  const count = 5;
  const { t } = useTranslation(['index']);
  return (
    <div className={classes.inner}>
      <div className={classes.content}>
        <Title className={classes.title}>
          <div style={{ padding: 50 }}>
            <Trans
              i18nKey="hero.title"
              t={t}
              components={[<span key="hero.title" className={classes.highlight} />]}
            />
          </div>
        </Title>
        <Text color="dimmed" mt="md">
          {t('hero.subtitle')}
        </Text>

        <List
          mt={30}
          spacing="sm"
          size="sm"
          icon={
            <ThemeIcon size={20} radius="xl">
              <IconCheck size={12} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <Trans
              t={t}
              i18nKey="hero.bulletpoints.1"
              components={[<b key="hero.bulletpoints.1" />]}
            />
          </List.Item>
          <List.Item>
            <Trans
              t={t}
              i18nKey="hero.bulletpoints.2"
              components={[<b key="hero.bulletpoints.2" />]}
            />
          </List.Item>
          <List.Item>
            <Trans
              t={t}
              i18nKey="hero.bulletpoints.3"
              components={[<b key="hero.bulletpoints.3" />]}
            />
          </List.Item>
        </List>

        <Group mt={30}>
          <Button radius="xl" size="md" className={classes.control} leftIcon={<IconSearch />}>
            {t('hero.start')}
          </Button>
          <ContactForm />
        </Group>
      </div>
      <Image src={image.src} className={classes.image} alt="Background image" />
    </div>
  );
}
