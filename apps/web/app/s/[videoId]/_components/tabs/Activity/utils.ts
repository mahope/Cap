import { DATE_LOCALE, t } from "@/app/s/[videoId]/_i18n/da";

export const formatTimestamp = (date: Date) => {
	return new Intl.DateTimeFormat(DATE_LOCALE, {
		hour: "numeric",
		minute: "numeric",
		hour12: false,
		year: "numeric",
		month: "long",
		day: "numeric",
	}).format(date);
};

export const formatTimeAgo = (date: Date) => {
	const now = new Date();
	const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

	if (diffInSeconds < 60) return t("now");

	const diffInMinutes = Math.floor(diffInSeconds / 60);
	if (diffInMinutes < 60) return t("{n}m ago", { n: diffInMinutes });

	const diffInHours = Math.floor(diffInMinutes / 60);
	if (diffInHours < 24) return t("{n}h ago", { n: diffInHours });

	const diffInDays = Math.floor(diffInHours / 24);
	if (diffInDays < 30) return t("{n}d ago", { n: diffInDays });

	const diffInMonths = Math.floor(diffInDays / 30);
	if (diffInMonths < 12) return t("{n}mo ago", { n: diffInMonths });

	const diffInYears = Math.floor(diffInDays / 365);
	return t("{n}y ago", { n: diffInYears });
};
