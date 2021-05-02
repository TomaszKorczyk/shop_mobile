// import useForm from "../../utils/hook/useForm";

// const {values} = useForm();
const content = {
  inputs: [
    {
      label: "Username",
      name: "username",
      type: "text",
      icon: "fas fa-user",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      icon: "fas fa-envelope",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      icon: "fas fa-unlock-alt",
    },
    {
      label: "Confirm password",
      name: "password2",
      type: "password",
      icon: "fas fa-lock",
    },
  ],
};

export default content;
