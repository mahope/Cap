import { buildEnv } from "@cap/env";
import { t } from "@/app/s/[videoId]/_i18n/da";
import { SearchDoodle } from "@/components/paper-state/doodles";
import {
	PaperActions,
	PaperState,
	paperStateStyles as styles,
} from "@/components/paper-state/PaperState";

export default function VideoNotFound() {
	const homeHref = buildEnv.NEXT_PUBLIC_WEB_URL;

	return (
		<PaperState
			homeHref={homeHref}
			doodle={<SearchDoodle />}
			title={t("We couldn't find this video")}
			lede={t(
				"It may have been deleted, or the link is missing a few characters. Check the link with whoever sent it to you.",
			)}
			footnote={
				<>
					{t("Think this is a mistake? Email")}{" "}
					<a href="mailto:hello@cap.so">hello@cap.so</a>
				</>
			}
		>
			<PaperActions>
				<a className={styles.cta} href={homeHref}>
					{t("Go to Cap")}
				</a>
			</PaperActions>
		</PaperState>
	);
}
