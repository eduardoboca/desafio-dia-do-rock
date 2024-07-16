import successIcon from "/img-success.png";
import errorIcon from "/img-failure.png";

interface NavbarRegisterResponseProps {
  isSuccess: boolean;
}

export function NavbarRegisterResponse({
  isSuccess,
}: NavbarRegisterResponseProps) {
  const icon = isSuccess ? successIcon : errorIcon;
  const statusMessage = isSuccess
    ? "Obrigado pelo envio!"
    : "Ops, algo saiu errado";
  const message = isSuccess
    ? "Seu evento será avaliado pela nossa equipe e você receberá um E-mail em breve com o resultado da nossa aprovação"
    : "Ocorreu uma falha ao tentar submeter seu evento, por favor verifique sua conexão com a internet e tente novamente.";

  return (
    <div className="pt-[128px] px-20 text-center">
      <img src={icon} className="mx-auto mb-[36px]" />

      <p className="text-[24px] font-bold mb-[12px]">{statusMessage}</p>

      <p className="text-[16px] font-normal text-[#848487] mb-[28px]">
        {message}
      </p>

      <button className="bg-[#8625D2] rounded-[8px] w-[335px] h-[60px]">
        Fechar
      </button>
    </div>
  );
}
