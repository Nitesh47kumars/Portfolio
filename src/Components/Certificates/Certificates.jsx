import { useParams } from "react-router-dom";

const certificates = {
  mindset: "/Certificates/Mindset_Certificate.pdf",
  workshop: "/Certificates/Workshop_Certificate.pdf",
  experttalk: "/Certificates/ExpertTalk_Certificate.pdf",
  tataquiz: "/Certificates/TataQuiz_Certificate.pdf",
};

export default function Certificates() {
  const { slug } = useParams();
  const file = certificates[slug];

  if (!file) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600 text-sm">
        Certificate not found.
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <iframe
        src={`${file}#toolbar=0`}
        title="Certificate"
        className="w-full h-full border-none"
      />
      <p className="text-center text-xs text-gray-500 py-2">
        Can't see the certificate?{" "}
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Open directly
        </a>
      </p>
    </div>
  );
}
