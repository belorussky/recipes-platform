"use client";

import CustomModal from "@/components/common/modal";
import LoginForm from "@/forms/login.form";


interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

function LoginModal({ onClose, isOpen }: IProps) {
    return (
        <CustomModal isOpen={isOpen} onClose={onClose} title="Sign in">
            <LoginForm onClose={onClose} />
        </CustomModal>
    )
}

export default LoginModal;