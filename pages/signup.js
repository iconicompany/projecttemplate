import { withRouter } from 'next/router';
import { signIn, signUp } from '../public/resources/auth';
import Notification from '../public/helpers/Notification';
import { AutoField, AutoForm, SubmitField } from 'uniforms-antd';
import SignupSchema from '../src/scheme/SignupSchema.mjs';
import createSchemaBridge from '../src/libs/uniforms-bridge.mjs';

const SignUp = ({ router }) => {
  const submit = (values) => {
    signUp(values).then(res => {
      if (res.ok) {
        signIn(values).then((res) => {
          if (res.ok) {
            router.push('/');
          } else {
            Notification.error(JSON.stringify(res.error));
          }
        });
      } else {
        Notification.error(JSON.stringify(res.error));
      }
    }) // todo refactor
  };

  return (
    <AutoForm schema={createSchemaBridge(SignupSchema.get())} onSubmit={submit}>
      <AutoField name="login" />
      <AutoField name="name" />
      <AutoField name="password" />
      <SubmitField value="Зарегистрироваться" />
    </AutoForm>
  );
};

export default withRouter(SignUp);
