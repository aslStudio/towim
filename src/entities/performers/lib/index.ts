import {AnimatedIconProps, IconBaseProps} from '@/shared/ui'
import { Category } from '../model/categories'

export function getCategoryText(category: Category) {
    switch (category) {
        case Category.Co: return 'Co.'
        case Category.Designers: return 'Designers'
        case Category.Vip: return 'VIP'
        case Category.Top: return 'Top'
        case Category.Test: return 'Test'
        case Category.Test1: return 'Test1'
    }
}

export function getCategoryIcon(
    category: Category,
): AnimatedIconProps['name'] | undefined {
    switch (category) {
        case Category.Top: return 'star'
        case Category.Vip: return 'verified'
        case Category.Co: return 'briefcase'
        default: return undefined
    }
}