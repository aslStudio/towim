import { IconBaseProps } from '@/shared/ui'
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
    theme: 'light' | 'dark'
): IconBaseProps['name'] | undefined {
    switch (category) {
        case Category.Top: return 'icon-double-star'
        case Category.Vip: 
            if (theme === 'light') {
                return 'icon-verified-dark'
            } else {
                return 'icon-verified-light'
            }
        case Category.Co: return 'icon-co'
        default: return undefined
    }
}