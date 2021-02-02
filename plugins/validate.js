import { extend } from "vee-validate";

extend("my-validation", {
  message: "This {_field_} is invalid.",
  validate: value => {
    // ...
    return true;
  }
});
