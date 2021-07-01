const stdTimezoneOffset = function () {
  var jan = new Date(this.getFullYear(), 0, 1);
  var jul = new Date(this.getFullYear(), 6, 1);
  return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
};

const isDstObserved = () =>
  new Date().getTimezoneOffset() < stdTimezoneOffset();

function getTimezoneAbbr(tzOffset) {
  switch (tzOffset) {
    case 0:
      return "BST";
    case 1:
      return "CEST";
    case 3:
      return "MSK";
    case 2:
    default:
      return "EEST";
  }
}
export default function LocalTime({
  start,
  end,
  format = "%start%-%end% %timezone%",
}) {
  let tzOffset = -new Date().getTimezoneOffset() / 60;
  tzOffset = isDstObserved ? tzOffset - 1 : tzOffset;
  if (tzOffset >= 0 && tzOffset <= 3) {
    start = start - 2 + tzOffset;
    end = end - 2 + tzOffset;
  }
  const zoneAbbr = getTimezoneAbbr(tzOffset);
  return format
    .replace("%start%", start)
    .replace("%end%", end)
    .replace("%timezone%", zoneAbbr);
}
