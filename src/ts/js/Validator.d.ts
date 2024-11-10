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
declare const Validator: {
    (option: formItems): any;
    isRequired(selector: string, message: string): requireItems;
    isEmail(selector: string, message: string): {
        selector: string;
        check(data: string): string | undefined;
    };
    isMinLength(selector: string, min: number, message: string): {
        selector: string;
        check(data: string): string | undefined;
    };
    isConfirm(selector: string, value: () => string, message: string): {
        selector: string;
        check(data: string): string | undefined;
    };
};
