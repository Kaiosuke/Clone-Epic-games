interface formItems {
  form: string;
  inputBox: string;
  errorMessage: string;
  rules: [];
}

interface requireItems {
  selector: string;
  check: {};
}

const Validator = (option: formItems): any => {
  const form = document?.querySelector(option.form);

  const ruleList: any = {};

  const validate = (inputElement: any, errorElement: any, rule: any): any => {
    let errorMessage = "";
    const rules = ruleList[rule.selector];

    for (let [key, value] in rules) {
      errorMessage = rules[key](inputElement.value);
      if (errorMessage) break;
    }
    if (errorMessage) {
      errorElement.innerHTML = errorMessage;
      inputElement.parentElement.classList.add("active");
    } else {
      errorElement.innerHTML = "";
      inputElement.parentElement.classList.remove("active");
    }
  };

  const parentElement = (element: Element | null, inputBox: string): any => {
    while (element?.parentElement) {
      if (element.parentElement.matches(inputBox)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  };

  if (form) {
    option.rules.forEach((rule: requireItems) => {
      const inputElement = document.querySelector(rule.selector);
      const errorElement = parentElement(
        inputElement,
        option.inputBox
      ).querySelector(option.errorMessage);

      if (ruleList[rule.selector]) {
        ruleList[rule.selector].push(rule.check);
      } else {
        ruleList[rule.selector] = [rule.check];
      }

      inputElement?.addEventListener("blur", () => {
        validate(inputElement, errorElement, rule);
      });

      inputElement?.addEventListener("input", () => {
        validate(inputElement, errorElement, rule);
      });

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        validate(inputElement, errorElement, rule);
      });
    });
  }
};

Validator.isRequired = (selector: string, message: string): requireItems => {
  return {
    selector,
    check(data: string) {
      return data ? undefined : message || "Please fill in the information";
    },
  };
};

Validator.isEmail = (selector: string, message: string) => {
  return {
    selector,
    check(data: string) {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(data)
        ? undefined
        : message || "Vui lòng điền thông tin";
    },
  };
};

Validator.isMinLength = (selector: string, min: number, message: string) => {
  return {
    selector,
    check(data: string) {
      return data.length >= min
        ? undefined
        : message || "Vui lòng điền thông tin";
    },
  };
};

Validator.isConfirm = (
  selector: string,
  value: () => string,
  message: string
) => {
  return {
    selector,
    check(data: string) {
      return data === value()
        ? undefined
        : message || "Vui lòng điền thông tin";
    },
  };
};
