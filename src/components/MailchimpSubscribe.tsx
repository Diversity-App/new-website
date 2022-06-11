import MailchimpSubscribe from 'react-mailchimp-subscribe';

import React from 'react';
import {
  createStyles,
  Text,
  TextInput,
  Button,
  Group,
  Container,
  Title,
  Paper,
} from '@mantine/core';
import { useTranslation } from 'next-i18next';

import { useForm } from '@mantine/form';

// simplest form (only email)
const url =
  'https://diversity-app.us12.list-manage.com/subscribe/post?u=e68edb9c8a06c3a4ea3f28968&amp;id=5a4484631d';
const SimpleForm = () => <MailchimpSubscribe url={url} />;

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 26,
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  controls: {
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column-reverse',
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
}));

export default function MailchimpSubscribeForm(props: any) {
  const { t } = useTranslation(['index']);
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      EMAIL: '',
    },

    validate: {
      EMAIL: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <Container size={460} my={30}>
          <Title className={classes.title} align="center">
            {t('newsletter.title')}
          </Title>
          <Text color="dimmed" size="sm" align="center">
            {t('newsletter.description')}
          </Text>
          {status === 'success' && <Text color="green">{message}</Text>}
          {status === 'error' && (
            <Text>
              <Text color="red">{message.toString()}</Text>
            </Text>
          )}
          {status === 'sending' && (
            <Text>
              <Text color="dimmed">Sending</Text>
            </Text>
          )}
          <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
            <form onSubmit={form.onSubmit((values) => subscribe(values))}>
              <Group grow direction="column">
                <TextInput required placeholder="toto@gmail.com" {...form.getInputProps('EMAIL')} />
                <Button type="submit" className={classes.control}>
                  {t('newsletter.subscribe')}
                </Button>
              </Group>
            </form>
          </Paper>
        </Container>
      )}
    />
  );
}
