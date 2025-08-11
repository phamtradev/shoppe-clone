import { RegisterOptions, useForm, useWatch } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Input from 'src/components/Input';
import { getRules } from 'src/utils/rules';

interface FormData {
  email: string;
  password: string;
  confirm_password: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  const rules = getRules(getValues);

  const onSubmit = handleSubmit(
    (data) => {},
    (data) => {
      const password = getValues('password');
      console.log(password);
    },
  );
  // const formValues = useWatch();
  // console.log(formValues);

  const email = watch('email');
  console.log(email);

  return (
    <div className="bg-orange">
      <div className="containers">
        <div className="grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form
              className="p-10 rounded bg-white shadow-sm"
              onSubmit={onSubmit}
            >
              <div className="text-2xl">Đăng Ký</div>
              <Input
                name="email"
                register={register}
                type="email"
                className="mt-8"
                errorMessage={errors.email?.message}
                placeholder="Email"
                rules={rules.email as RegisterOptions}
              />

              <Input
                name="password"
                register={register}
                type="password"
                className="mt-2"
                errorMessage={errors.password?.message}
                placeholder="Password"
                autoComplete="on"
                rules={rules.password as RegisterOptions}
              />

              <Input
                name="confirm_password"
                register={register}
                type="password"
                className="mt-2"
                errorMessage={errors.confirm_password?.message}
                placeholder="Confirm Password"
                autoComplete="on"
                rules={rules.confirm_password as RegisterOptions}
              />

              <div className="mt-2">
                <button
                  type="submit"
                  className="w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600 cursor-pointer"
                >
                  Đăng ký
                </button>
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-center">
                  <span className="text-gray-400">Bạn đã có tài khoản?</span>
                  <Link className="text-red-400 ml-1" to="/login">
                    Đăng nhập
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
