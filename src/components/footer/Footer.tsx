import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <footer className="w-full bg-green-100 text-green-800 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center py-4 gap-2">
        <p className="text-sm font-medium">💊 Farmácia da Ju © {data}</p>

        <div className="flex items-center gap-4">
          <LinkedinLogoIcon size={22} weight="bold" />
          <InstagramLogoIcon size={22} weight="bold" />
          <FacebookLogoIcon size={22} weight="bold" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
