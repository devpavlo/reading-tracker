import UserForm from 'components/UserForm';
import userRegisterUser from 'Hooks/useRegisterUser';
import { userRegisterSchema } from 'Utils/validSchema';

function RegisterPage() {
	const { onSubmitForm } = userRegisterUser();
	return (
		<UserForm
			onSubmitForm={onSubmitForm}
			validationSchema={userRegisterSchema}
			initialValues={{ name: '', email: '', password: '' }}
			formType="sign up"
			text="Are you with us?"
			variant="login"
			navigate="/login"
		/>
	);
}

export default RegisterPage;
