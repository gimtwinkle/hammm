'use client';

import ComboButton from '@/components/atoms/ComboButton/ComboButton';
import { ComboInput } from '@/components/atoms/ComboInput/ComboInput';
import { ComboText } from '@/components/atoms/ComboText/ComboText';
import { ComboTextArea } from '@/components/atoms/ComboTextArea/ComboTextArea';
import { ComboDialog } from '@/components/molecules/ComboDialog/ComboDialog';

const Join = () => {
  return (
    <div className="bg-gingham px-15 py-15 w-full h-screen">
      <ComboText size="lg" variant="default" weight="semibold">
        회원가입을 위해 정보를 알려주세요.
      </ComboText>
      <br />
      <ComboInput.Text
        id="input01"
        label="성명"
        placeholder="{userName}"
        className="bg-opacity-30 bg-white"
      />
      <br />
      <ComboInput.Text
        id="input02"
        label="이메일주소"
        placeholder="{userEmail}"
        className="bg-opacity-30 bg-white"
      />
      <br />
      <ComboInput.Text
        id="input03"
        label="생년월일"
        placeholder="{userBirth}"
        className="bg-opacity-30 bg-white"
      />
      <br />
      <br />
      <ComboText size="base" variant="default">
        서비스 이용약관에 동의해주세요.
      </ComboText>
      <ComboTextArea
        readOnly
        value="약관이 들어옵니다"
        className="bg-opacity-30 bg-white"
      />
      <ComboButton label="동의하고 가입하기" className="w-full mt-10" />

      <ComboDialog
        content="입력한 정보가 모두 사라져요."
        onConfirm={() => {
          alert('클릭시, join-901로 이동');
        }}
        confirmBtnName="확인"
        cancelBtnName="취소"
        showFooter
        title="다음에 다시 진행하시겠어요?"
        triggerLabel="다음에 하기"
      />
    </div>
  );
};

export default Join;
