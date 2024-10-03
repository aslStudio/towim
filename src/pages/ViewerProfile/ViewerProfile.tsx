import { ViewerCard, viewerModel } from "@/entities/viewer"
import { reflect } from "@effector/reflect"

export const ViewerProfile = () => {
    return (
        <div>
            <ViewerCardReflect />
            
        </div>
    )
}

const ViewerCardReflect = reflect({
    view: ViewerCard,
    bind: {
        name: viewerModel.shortModule.$shortViewer.map(item => item.name),
        bio: viewerModel.shortModule.$shortViewer.map(item => item.bio),
        avatar: viewerModel.shortModule.$shortViewer.map(item => item.avatar),
        isVerified: viewerModel.shortModule.$shortViewer.map(item => item.isVerified),
        isFilledProfile: viewerModel.shortModule.$shortViewer.map(item => item.isFilledProfile),
        isPublishedProfile: viewerModel.shortModule.$shortViewer.map(item => item.isPublishedProfile),
    }
})