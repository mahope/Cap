"use client";

import { Switch } from "@cap/ui";
import { useState } from "react";
import { t } from "@/app/s/[videoId]/_i18n/da";

interface SettingOption {
	id: string;
	label: string;
	description?: string;
	enabled: boolean;
}

export const Settings = () => {
	const [settings, setSettings] = useState<SettingOption[]>([
		{
			id: "allow_comments",
			label: t("Allow Comments"),
			description: t("Define what viewers can see and do."),
			enabled: true,
		},
		{
			id: "allow_anonymous_comments",
			label: t("Allow Anonymous Comments"),
			enabled: false,
		},
		{
			id: "enable_transcript",
			label: t("Enable Transcript"),
			enabled: true,
		},
		{
			id: "enable_download",
			label: t("Enable Download"),
			enabled: true,
		},
	]);

	const toggleSetting = (id: string) => {
		setSettings((prev) =>
			prev.map((setting) =>
				setting.id === id ? { ...setting, enabled: !setting.enabled } : setting,
			),
		);
	};

	return (
		<div className="flex flex-col h-full">
			<div className="p-4 border-b border-gray-200">
				<h3 className="text-sm font-medium">{t("Settings")}</h3>
			</div>
			<div className="overflow-y-auto flex-1">
				<div className="p-4 space-y-6">
					{settings.map((setting) => (
						<div key={setting.id} className="flex justify-between items-center">
							<div className="flex-1">
								<div className="flex justify-between items-center">
									<div>
										<h4 className="text-sm font-medium text-gray-900">
											{setting.label}
										</h4>
										{setting.description && (
											<p className="text-sm text-gray-12">
												{setting.description}
											</p>
										)}
									</div>
									<Switch
										checked={setting.enabled}
										onCheckedChange={() => toggleSetting(setting.id)}
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
