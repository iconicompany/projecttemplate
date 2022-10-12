import { withRouter } from 'next/router';
import Notification from '../client/helpers/Notification';
import { signIn } from '../client/resources/auth';
import { AutoField, AutoForm, SubmitField } from 'uniforms-antd';
import createSchemaBridge from '../src/libs/uniforms-bridge.mjs';
import SigninSchema from '../src/scheme/SigninSchema.mjs';

/**
 * Авторизация пользователя
 * @return {JSX.Element}
 */
const SignIn = ({ router }) => {
  const submit = async (values) => {
    signIn(values).then((res) => {
      if (res.ok) {
        router.push('/');
      } else {
        Notification.error(JSON.stringify(res.error));
      }
    });
  };

  return (
    <AutoForm schema={createSchemaBridge(SigninSchema.get())} onSubmit={submit}>
      <AutoField name="login"/>
      <AutoField name="password" type="password"/>
      <SubmitField value="Войти" />
    </AutoForm>
  );
};

export default withRouter(SignIn);
