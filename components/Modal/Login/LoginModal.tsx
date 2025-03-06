import React, { useState } from 'react';
import { GrSecure } from 'react-icons/gr';

import { RiEyeLine, RiEyeOffLine, RiInformationFill, RiLock2Line, RiMailLine } from '@remixicon/react';

import { FlipBox } from '#components/Flipbox/FlipboxV2';
import { SVGs } from '#components/Layout/SVG/SVGs';
import Button from '#components/radix/button';
import Hint from '#components/radix/hint';
import Input from '#components/radix/input';
import Label from '#components/radix/label';

import Modal from '../modal';

type ILoginFormProps = {
  // children: React.ReactNode | React.ReactNode[];
};

function IconInfoCustom(props: React.SVGProps<SVGSVGElement>) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 16.25a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zm1.116-3.041l.1-.408a1.709 1.709 0 01-.25.083 1.176 1.176 0 01-.308.048c-.193 0-.329-.032-.407-.095-.079-.064-.118-.184-.118-.359a3.514 3.514 0 01.118-.672l.373-1.318c.037-.121.062-.255.075-.4a3.73 3.73 0 00.02-.304.866.866 0 00-.292-.678c-.195-.174-.473-.26-.833-.26-.2 0-.412.035-.636.106-.224.07-.459.156-.704.256l-.1.409c.073-.028.16-.057.262-.087.101-.03.2-.045.297-.045.198 0 .331.034.4.1.07.066.105.185.105.354 0 .093-.01.197-.034.31a6.216 6.216 0 01-.084.36l-.374 1.325c-.033.14-.058.264-.073.374-.015.11-.022.22-.022.325 0 .272.1.496.301.673.201.177.483.265.846.265.236 0 .443-.03.621-.092s.417-.152.717-.27zM11.05 7.85a.772.772 0 00.26-.587.78.78 0 00-.26-.59.885.885 0 00-.628-.244.893.893 0 00-.63.244.778.778 0 00-.264.59c0 .23.088.426.263.587a.897.897 0 00.63.243.888.888 0 00.629-.243z"
        fill="currentColor"
      />
    </svg>
  );
}

function UsernameInput() {
  return (
    <div className="flex w-full max-w-[300px] flex-col gap-6">
      <div className="flex flex-col gap-1">
        <Label.Root htmlFor="email">
          Email Address
          <Label.Asterisk />
        </Label.Root>

        <Input.Root>
          <Input.Wrapper>
            <Input.Icon as={RiMailLine} />
            <Input.Input id="email" type="email" placeholder="my@email.com" />
          </Input.Wrapper>
        </Input.Root>

        <Hint.Root>
          <Hint.Icon as={RiInformationFill} />
          This is the e-mail address you signed up with.
        </Hint.Root>
      </div>
    </div>
  );
}

function PasswordInput() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="flex w-full max-w-[300px] flex-col gap-6">
      <div className="flex flex-col gap-1">
        <Label.Root htmlFor="password1">
          Password
          <Label.Asterisk />
        </Label.Root>

        <Input.Root>
          <Input.Wrapper>
            <Input.Icon as={RiLock2Line} />
            <Input.Input id="password1" type={showPassword ? 'text' : 'password'} placeholder="••••••••••" />
            <button type="button" onClick={() => setShowPassword((s) => !s)}>
              {showPassword ? (
                <RiEyeOffLine className="size-5 text-text-soft-400 group-has-[disabled]:text-text-disabled-300" />
              ) : (
                <RiEyeLine className="size-5 text-text-soft-400 group-has-[disabled]:text-text-disabled-300" />
              )}
            </button>
          </Input.Wrapper>
        </Input.Root>

        <Hint.Root>
          <Hint.Icon as={RiInformationFill} />
          This is a hint text to help user.
        </Hint.Root>
      </div>
    </div>
  );
}

const LoginForm = (props: ILoginFormProps) => {
  return (
    <FlipBox name="login-form" className="y x-hug y-hug C" $style="gap: 20px;">
      <UsernameInput />
      <PasswordInput />
    </FlipBox>
  );
};

const LoginPage = () => {
  return (
    <>
      <div className="rounded-10 bg-success-lighter flex size-10 shrink-0 items-center justify-center">
        <GrSecure className="text-success-base size-6" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="space-y-3 flex flex-col items-center justify-center mb-8">
          <SVGs image="flippedLogo_invert" />
          <div className="text-label-md text-text-strong-950 mb-8">Login to My Account</div>
        </div>
        <div className="text-paragraph-sm text-text-sub-600">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

type LoginModalButtonProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const LoginModalButton = (props: LoginModalButtonProps) => {
  const { children } = props;
  const [loginModal_open, loginModal_setOpen] = useState(false);

  return (
    <Modal.Root open={loginModal_open} onOpenChange={loginModal_setOpen}>
      <Modal.Trigger asChild>{children}</Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay className="DialogOverlay">
          <Modal.Content className="max-w-[440px]">
            <Modal.Body className="flex flex-col items-start gap-4">
              <LoginPage />
            </Modal.Body>
            <Modal.Footer>
              <Modal.Close asChild>
                <Button.Root variant="neutral" mode="stroke" size="small" className="w-full">
                  Cancel
                </Button.Root>
              </Modal.Close>
              <Button.Root size="small" className="w-full">
                Log in
              </Button.Root>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Overlay>
      </Modal.Portal>
    </Modal.Root>
  );
};
