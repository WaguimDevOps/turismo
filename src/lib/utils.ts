export const handleShare = (title: string, text: string) => {
  if (typeof window !== 'undefined' && navigator.share) {
    navigator.share({
      title,
      text,
      url: window.location.href,
    }).catch(console.error);
  } else if (typeof window !== 'undefined') {
    // Fallback: Copy to clipboard
    navigator.clipboard.writeText(`${title} - ${text} - ${window.location.href}`);
    alert("Link copiado para a área de transferência!");
  }
};
