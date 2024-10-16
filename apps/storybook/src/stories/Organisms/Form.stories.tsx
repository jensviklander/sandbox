import { Meta, StoryFn } from '@storybook/react';
import { Form } from '@repo/ui/form';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Organisms/Form',
  component: Form,
  parameters: {
    docs: {
      description: {
        component:
          'The Form component allows for a dynamic and reusable form structure that supports various input types like text, email, password, and checkbox. It validates required fields and handles form submissions.'
      }
    }
  },
  argTypes: {
    buttonText: {
      control: 'text',
      description: 'Text to be displayed on the submit button'
    },
    fields: {
      control: 'object',
      description:
        'Array of field objects defining the form fields and their properties'
    },
    onSubmit: {
      action: 'submitted',
      description: 'Callback function to handle form submission'
    }
  }
} as Meta;

const Template: StoryFn<typeof Form> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Submit',
  fields: [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
      required: true
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      required: true
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      required: true
    },
    {
      name: 'acceptTerms',
      label: 'Accept Terms and Conditions',
      type: 'checkbox',
      required: true,
      defaultValue: false
    }
  ],
  onSubmit: action('Form Submitted')
};

export const WithOptionalFields = Template.bind({});
WithOptionalFields.args = {
  buttonText: 'Register',
  fields: [
    {
      name: 'fullName',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Enter your full name',
      required: false
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      required: true
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter a password',
      required: true
    },
    {
      name: 'newsletter',
      label: 'Subscribe to Newsletter',
      type: 'checkbox',
      defaultValue: true
    }
  ],
  onSubmit: action('Form Submitted with Optional Fields')
};
