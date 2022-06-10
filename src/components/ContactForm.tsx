import React, { useState } from 'react';
import {
  createStyles,
  Text,
  Button,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Group,
  Modal,
  Image,
  Anchor,
} from '@mantine/core';
import { Check, Cross } from 'tabler-icons-react';
import { useForm } from '@mantine/form';
import { showNotification, updateNotification } from '@mantine/notifications';
import axios from 'axios';
import { IconMail } from '@tabler/icons';
import { FORMSPREE_URL } from '../Constants';
import { useTranslation } from 'next-i18next';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
      theme.colors[theme.primaryColor][7]
    } 100%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    '&:hover': {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },
}));

export default function ContactForm(props: any) {
  const [opened, setOpened] = useState(props.opened || false);
  const { classes } = useStyles();
  const { t } = useTranslation(['index']);
  return (
    <>
      <Modal
        size={1000}
        opened={opened}
        radius="lg"
        padding={0}
        withCloseButton={false}
        onClose={() => setOpened(false)}
      >
        <ContactUs close={setOpened} />
      </Modal>
      <Button
        color={'orange'}
        radius="xl"
        size="md"
        className={classes.control}
        onClick={() => setOpened(true)}
        leftIcon={<IconMail />}
      >
        {t('hero.contact')}
      </Button>
    </>
  );
}

export function ContactUs(props: any) {
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    validate: {
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  const { classes } = useStyles();
  const { t } = useTranslation(['index']);

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        <div>
          <Title className={classes.title}>{t('contact.title')}</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            {t('contact.subtitle')}
          </Text>
        </div>
        <form
          onSubmit={form.onSubmit((values) => {
            showNotification({
              id: 'load-data',
              loading: true,
              title: t('contact.sending.title'),
              message: t('contact.sending.message'),
              autoClose: false,
              disallowClose: true,
            });

            setTimeout(() => {
              axios
                .post(FORMSPREE_URL, values)
                .then(() => {
                  updateNotification({
                    id: 'load-data',
                    color: 'teal',
                    title: t('contact.success.title'),
                    message: t('contact.success.message'),
                    icon: <Check />,
                    autoClose: 2000,
                  });
                  props.close(false);
                })
                .catch(() => {
                  updateNotification({
                    id: 'load-data',
                    color: 'red',
                    title: t('contact.error.title'),
                    message: t('contact.error.message'),
                    icon: <Cross />,
                    autoClose: 2000,
                  });
                  props.close(false);
                });
            }, 800);
          })}
          className={classes.form}
        >
          <TextInput
            id="email"
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...form.getInputProps('email')}
          />
          <TextInput
            label="Name"
            id="name"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...form.getInputProps('name')}
          />
          <Textarea
            required
            id="message"
            label="Your message"
            placeholder="Hello, I am Nigerian prince who is looking to give away my fortune. I have been blessed with a large sum of money and I want to share it with someone who is in need. If you are interested in receiving my gift, please reply to this email and I will send you more information. "
            minRows={9}
            mt="md"
            {...form.getInputProps('message')}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Group direction="row" position="apart" mt="md">
            <Text>
              Made with
              <Anchor target="_blank" href="https://formspree.io/">
                <Image alt="Formspree-logo" width={100} src="https://formspree.io/static/img/formspree-new.svg" />
              </Anchor>
            </Text>
            <Button type="submit">Send message</Button>
          </Group>
        </form>
      </SimpleGrid>
    </div>
  );
}
