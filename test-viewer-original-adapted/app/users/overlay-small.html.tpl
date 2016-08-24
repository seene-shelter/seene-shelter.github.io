<div class="user-overlay">
	<div class="user-meta">
		<a href="/u/{{user.username}}" target="_blank" oe-post-top="{state:'root.user.scenes', params:{username: user.username}}">
			<figure ng-if="user.avatar_url" class="user-avatar">
				<img ng-src="{{ user.avatar_url | imgVariant:'thumb_retina' | relProtocol }}" err-src="https://d3ts8zn71mg69j.cloudfront.net/frontend-app/static/images/b503611e.AvatarDefault@2x.png"  src="/images/b503611e.AvatarDefault@2x.png" class="img-circle" />
			</figure>
			<div class="user-meta-body">
				<span><strong>{{user.username}}</strong></span>
			</div>
		</a>
	</div>
</div>
