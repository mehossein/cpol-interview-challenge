// Angular
import { ChangeDetectionStrategy, Component } from '@angular/core';

// App
import { SIDEBAR_ITEMS } from '@app/dashboard/shared/config';
import { sidebarItem } from '@app/dashboard/shared/interface';
import { QUICK_ACTION } from '@app/dashboard/shared/config/quick-action.config';
import { quickAction } from '@app/dashboard/shared/interface/quick-action.interface';

@Component({
  selector: 'cpol-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  get getSidebarMenuItems(): sidebarItem[] {
    return SIDEBAR_ITEMS;
  }

  get getSidebarQuickActionItems(): quickAction[] {
    return QUICK_ACTION;
  }

  trackBySidebarItems(index: number, sidebarItem: sidebarItem | quickAction) {
    return sidebarItem.index;
  }
}
