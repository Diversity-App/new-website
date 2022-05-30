import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
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

export function HeroBullets() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Une application <span className={classes.highlight}>simple</span>
              <br /> d&apos;analyse de <span className={classes.highlight}>vos</span> données
            </Title>
            <Text color="dimmed" mt="md">
              Créé par une équipe de développeurs passionnés par le développement web et les réseaux sociaux, Diversity
              vous permet d&apos;analyser vos données sur les réseaux sociaux en les connectant a notre plateforme
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
                <b>100% transparent</b> - Aucune donnée n&apos;est stockée sur notre serveur
              </List.Item>
              <List.Item>
                <b>Gratuit</b> - L&apos;application est gratuite d&apos;utilisation
              </List.Item>
              <List.Item>
                <b>Pas de spam</b> - Nous vous enverrons que des emails pertinents
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control} leftIcon={<IconSearch />}>
                Commencer à analyser
              </Button>
              <Button color={'orange'} radius="xl" size="md" className={classes.control} leftIcon={<IconMail />}>
                Nous contacter
              </Button>
            </Group>
          </div>
          <Image src={image.src} className={classes.image} alt="Background image" />
        </div>
      </Container>
    </div>
  );
}

export default HeroBullets;
