const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Behaviors.jumpthru,
		C3.Plugins.TiledBg,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{Платформер: 0},
	{СледитьЗа: 0},
	{Спрайт: 0},
	{Спрайт2: 0},
	{Твёрдый: 0},
	{СквознаяПлатформа: 0},
	{Спрайт3: 0},
	{Спрайт4: 0},
	{Спрайт5: 0},
	{Спрайт6: 0},
	{Спрайт7: 0},
	{Спрайт8: 0},
	{Спрайт9: 0},
	{Спрайт10: 0},
	{Спрайт11: 0},
	{ТайловыйФон: 0},
	{Спрайт12: 0},
	{Спрайт13: 0},
	{Якорь: 0},
	{Текст: 0},
	{"5000к": 0}
];

self.InstanceType = {
	Спрайт: class extends self.ISpriteInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	Спрайт4: class extends self.ISpriteInstance {},
	Спрайт5: class extends self.ISpriteInstance {},
	Спрайт6: class extends self.ISpriteInstance {},
	Спрайт7: class extends self.ISpriteInstance {},
	Спрайт8: class extends self.ISpriteInstance {},
	Спрайт9: class extends self.ISpriteInstance {},
	Спрайт10: class extends self.ISpriteInstance {},
	Спрайт11: class extends self.ISpriteInstance {},
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	Спрайт12: class extends self.ISpriteInstance {},
	Спрайт13: class extends self.ISpriteInstance {},
	Текст: class extends self.ITextInstance {}
}