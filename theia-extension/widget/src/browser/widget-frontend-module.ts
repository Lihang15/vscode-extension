import { ContainerModule } from '@theia/core/shared/inversify';
import { WidgetWidget } from './widget-widget';
import { WidgetContribution } from './widget-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';
import { AttachCommandContribution } from './attach-command';
import { CommandContribution, MenuContribution } from '@theia/core';
import { MyFlwMenuContribution } from './menu-contribution/flw-menu-contribution';
import { MyMenuDebugContribution } from './menu-contribution/all-menu';
import { FlwMenuFilter } from './menu-contribution/flw-menu-filter';
import { FlwMenuReplacement } from './menu-contribution/flw-menu-replacement';
import { DSLWidget } from './top-view/dsl-widget';
import { JiangWebviewWidget } from './jiang-webview-widget';
import { JiangEditorContribution, JiangEditorOpener } from './jiang-editor-contribution';
import { MyToolbarWidget } from './toolbar/my-toolbar-widget';
import { MyToolbarContribution } from './toolbar/my-toolbar-contribution';
import { LogoContribution } from './logo/logo-contribution';

export default new ContainerModule(bind => {
    bindViewContribution(bind, WidgetContribution);
    bind(FrontendApplicationContribution).toService(WidgetContribution);
    bind(WidgetWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: WidgetWidget.ID,
        createWidget: () => ctx.container.get<WidgetWidget>(WidgetWidget)
    })).inSingletonScope();

    bind(AttachCommandContribution).toSelf().inSingletonScope();
  bind(CommandContribution).toService(AttachCommandContribution);
  bind(MenuContribution).toService(AttachCommandContribution);

   bind(MyFlwMenuContribution).toSelf().inSingletonScope();
   bind(CommandContribution).toService(MyFlwMenuContribution);
  bind(MenuContribution).toService(MyFlwMenuContribution);
  bind(FrontendApplicationContribution).toService(MyFlwMenuContribution);

  bind(FrontendApplicationContribution).to(MyMenuDebugContribution);

  // 绑定菜单过滤器
  bind(FlwMenuFilter).toSelf().inSingletonScope();
  bind(FrontendApplicationContribution).toService(FlwMenuFilter);

  // 绑定菜单替换器
  bind(FlwMenuReplacement).toSelf().inSingletonScope();
  bind(MenuContribution).toService(FlwMenuReplacement);
  bind(FrontendApplicationContribution).toService(FlwMenuReplacement);


  bind(DSLWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: DSLWidget.ID,
        createWidget: () => ctx.container.get(DSLWidget)
    })).inSingletonScope();

  // 绑定 Jiang 编辑器
  bind(JiangWebviewWidget).toSelf();
  bind(WidgetFactory).toDynamicValue(ctx => ({
      id: JiangWebviewWidget.ID,
      createWidget: () => ctx.container.get(JiangWebviewWidget)
  }));

  bind(JiangEditorOpener).toSelf();
  bind(JiangEditorContribution).toSelf();
  bind(FrontendApplicationContribution).toService(JiangEditorContribution);

    // bind(TabBarToolbarContribution).to(GlobalToolbarContribution).inSingletonScope();
    // bind(CommandContribution).to(GlobalCommandContribution).inSingletonScope();

    // Widget
    bind(MyToolbarWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: MyToolbarWidget.ID,
        createWidget: () => ctx.container.get(MyToolbarWidget)
    }));

    // Contribution
    bind(MyToolbarContribution).toSelf().inSingletonScope();
    bind(FrontendApplicationContribution).toService(MyToolbarContribution);

   // 绑定贡献点
bind(FrontendApplicationContribution).to(LogoContribution).inSingletonScope();

});
